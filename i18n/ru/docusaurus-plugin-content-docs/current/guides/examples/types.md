---
sidebar_position: 2
---

# Типы

В этом руководстве рассматриваются типы данных из типизированных языков, таких как TypeScript, и где они вписываются в FSD.

## Типы-утилиты

Типы-утилиты — это типы, которые сами по себе не имеют особого смысла и обычно используются с другими типами. Например:

<figure>

```ts
type ArrayValues<T extends readonly unknown[]> = T[number];
```

<figcaption>
  Источник: https://github.com/sindresorhus/type-fest/blob/main/source/array-values.d.ts
</figcaption>

</figure>

Чтобы добавить типы-утилиты в ваш проект, установите библиотеку, например [`type-fest`][ext-type-fest], или создайте свою собственную библиотеку в `shared/lib`. Обязательно четко укажите, какие новые типы _можно_ добавлять в эту библиотеку, а какие — _нельзя_. Например, назовите ее `shared/lib/utility-types` и добавьте внутрь файл README, описывающий, что такое типы-утилиты в понимании вашей команды.

Не переоценивайте потенциал переиспользования типов-утилит. То, что их _можно_ использовать повторно, не означает, что так и будет, и поэтому не каждый тип-утилита должен быть в Shared. Некоторые типы-утилиты должны лежать прямо там, где они нужны:

- 📂 pages
  - 📂 home
    - 📂 api
      - 📄 ArrayValues.ts (тип-утилита)
      - 📄 getMemoryUsageMetrics.ts (код, который будет использовать эту утилиту)

:::warning

Не поддавайтесь искушению создать папку `shared/types` или добавить сегмент `types` в ваши слайсы. Категория "типы" похожа на категорию "компоненты" или "хуки" в том, что она описывает содержимое, а не то, для чего оно нужно. Сегменты должны описывать цель кода, а не его суть.

:::

## Бизнес-сущности и их ссылки друг на друга

Одними из наиболее важных типов в приложении являются типы бизнес-сущностей, т. е. реальных вещей, с которыми работает ваше приложение. Например, в приложении сервиса онлайн-музыки у вас могут быть бизнес-сущности _Песня_ (song), _Альбом_ (album) и т. д.

Бизнес-сущности часто приходят с бэкенда, поэтому первым шагом является типизация ответов бэкенда. Удобно иметь функцию запроса к каждому эндпоинту и типизировать результат вызова этой функции. Для дополнительной безопасности типов вы можете пропустить результат через библиотеку проверки по схемам, например [Zod][ext-zod].

Например, если вы храните все свои запросы в Shared, вы можете сделать так:

```ts title="shared/api/songs.ts"
import type { Artist } from "./artists";

interface Song {
  id: number;
  title: string;
  artists: Array<Artist>;
}

export function listSongs() {
  return fetch('/api/songs').then((res) => res.json() as Promise<Array<Song>>);
}
```

Вы могли заметить, что тип `Song` ссылается на другую сущность, `Artist`. Это преимущество хранения ваших запросов в Shared — реальные типы часто ссылаются друг на друга. Если бы мы положили эту функцию в `entities/song/api`, мы бы не смогли просто импортировать `Artist` из `entities/artist`, потому что FSD ограничивает кросс-импорт между слайсами через [правило импорта для слоёв][import-rule-on-layers]:

> Модуль в слайсе может импортировать другие слайсы только в том случае, если они расположены на слоях строго ниже.

Есть два способа решения этой проблемы:

1. **Параметризируйте типы**
   Вы можете сделать так, чтоб ваши типы принимали типовые аргументы в качестве слотов для соединения с другими сущностями, и даже накладывать ограничения на эти слоты. Например:

   ```ts title="entities/song/model/song.ts"
   interface Song<ArtistType extends { id: string }> {
     id: number;
     title: string;
     artists: Array<ArtistType>;
   }
   ```

   Это хорошо работает для некоторых типов, и иногда хуже работает для других. Простой тип, такой как `Cart = { items: Array<Product> }`, можно легко заставить работать с любым типом продукта. Более связанные типы, такие как `Country` и `City`, может быть не так легко разделить.

2. **Кросс-импортируйте (но только правильно)**
   Чтоб сделать кросс-импорт между сущностями в FSD, вы можете использовать отдельный публичный API специально для каждого слайса, который будет кросс-импортировать. Например, если у нас есть сущности `song` (песня), `artist` (исполнитель), и `playlist` (плейлист), и последние две должны ссылаться на `song`, мы можем создать два специальных публичных API для них обоих в сущности `song` через `@x`-нотацию:

   - 📂 entities
     - 📂 song
       - 📂 @x
         - 📄 artist.ts (публичный API, из которого будет импортировать сущность `artist`)
         - 📄 playlist.ts (публичный API, из которого будет импортировать сущность `playlist`)
       - 📄 index.ts (обыкновенный публичный API)
   
   Содержимое файла `📄 entities/song/@x/artist.ts` похоже на `📄 entities/song/index.ts`:


   ```ts title="entities/song/@x/artist.ts"
   export type { Song } from "../model/song.ts";
   ```

   Затем `📄 entities/artist/model/artist.ts` может импортировать `Song` следующим образом:

   ```ts title="entities/artist/model/artist.ts"
   import type { Song } from "entities/song/@x/artist";

   export interface Artist {
     name: string;
     songs: Array<Song>;
   }
   ```

   С помощью явных связей между сущностями мы получаем точный контроль взаимозависимостей и при этом поддерживаем достаточный уровень разделения доменов.

## Объекты передачи данных (DTO) и мапперы

Объекты передачи данных, или DTO (от англ. _data transfer object_), — это термин, описывающий форму данных, которые поступают из бэкенда. Иногда DTO можно использовать как есть, но иногда их формат неудобен для фронтенда. Тут приходят на помощь мапперы — это функции, которые преобразуют DTO в более удобную форму.

Если вы храните функции запросов в `shared/api`, то именно там должны быть DTO, прямо рядом с функцией, которая их использует:

```ts title="shared/api/songs.ts"
import type { ArtistDTO } from "./artists";

interface SongDTO {
  id: number;
  title: string;
  artist_ids: Array<ArtistDTO["id"]>;
}

export function listSongs() {
  return fetch('/api/songs').then((res) => res.json() as Promise<Array<SongDTO>>);
}
```

Как упоминалось в предыдущем разделе, хранение ваших запросов и DTO в Shared имеет преимущество того, что вы можете ссылаться на другие DTO.

Код мапперов, наоборот, должен лежать рядом с хранилищами. Их следует применять перед записью в хранилище. Например, с Redux Toolkit:

```ts title="entities/song/model/mapper.ts"
import { listSongs, type SongDTO } from "shared/api";

interface Song {
  id: string;
  title: string;
  fullTitle: string;
  artistIds: Array<string>;
}

export function convertSongDTO(dto: SongDTO): Song {
  return {
    id: String(dto.id),
    title: dto.title,
    fullTitle: `${dto.disc_no} / ${dto.title}`,
    artistIds: dto.artist_ids.map(String),
  };
}
```

```ts title="entities/song/model/songs.ts"
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { listSongs } from "shared/api";
import { convertSongDTO } from "./mapper";

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => listSongs().then((response) => response.songs));

const songAdapter = createEntityAdapter();
const songsSlice = createSlice({
  name: "songs",
  initialState: songAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSong.fulfilled, (state, action) => {
      songAdapter.upsertMany(state, action.payload.map(convertSongDTO))
    })
  },
});
```

Самый проблемный момент — это когда ответ от бэкенда содержит несколько сущностей. Например, если песня включает в себя не только ID авторов, но и сами объекты данных об авторах целиком. В этом случае сущности не могут не знать друг о друге (если только мы не хотим выбрасывать данные или проводить серьезную беседу с командой бэкенда). Вместо того, чтобы придумывать решения для неявных связей между срезами (например, общий middleware, который будет диспатчить действия другим слайсам), предпочитайте явный кросс-импорт через `@x`-нотацию:

```ts title="entities/song/model/songs.ts"
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'

import { getSong } from "shared/api";
import { convertSongDTO } from "./mapper";

// Объявляем схемы сущностей в normalizr
export const artistEntity = new schema.Entity('artists')
export const songEntity = new schema.Entity('songs', {
  artists: [artistEntity],
})

const songAdapter = createEntityAdapter()

export const fetchSong = createAsyncThunk(
  'songs/fetchSong',
  async (id: string) => {
    const data = await getSong(id)
    // Нормализуем данные, чтобы редьюсеры могли загружать предсказуемый объект, например:
    // `action.payload = { songs: {}, artists: {} }`
    const normalized = normalize(data, songEntity)
    return normalized.entities
  }
)

export const slice = createSlice({
  name: 'songs',
  initialState: songAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSong.fulfilled, (state, action) => {
      songAdapter.upsertMany(state, action.payload.songs)
    })
  },
})

const reducer = slice.reducer
export default reducer
```

```ts title="entities/artist/model/artists.ts"
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import { fetchSong } from 'entities/song/@x/artist'

const artistAdapter = createEntityAdapter()

export const slice = createSlice({
  name: 'users',
  initialState: artistAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSong.fulfilled, (state, action) => {
      // И здесь обрабатываем тот же ответ с бэкенда, добавляя исполнителей
      usersAdapter.upsertMany(state, action.payload.users)
    })
  },
})

const reducer = slice.reducer
export default reducer
```

Это немного ограничивает преимущества изоляции слайсов, но чётко обозначает связь между этими двумя сущностями, которую мы не контролируем. Если эти сущности когда-либо будут рефакториться, их нужно будет рефакторить вместе.

## Глобальные типы и Redux

Глобальные типы — это типы, которые будут использоваться во всем приложении. Существует два вида глобальных типов, в зависимости от того, что им нужно знать:
1. Универсальные типы, которые не имеют никакой специфики приложения
2. Типы, которым нужно знать обо всем приложении

Первый случай легко решить — поместите свои типы в Shared, в соответствующий сегмент. Например, если у вас есть интерфейс глобальной переменной для аналитики, вы можете поместить его в `shared/analytics`.

:::warning

Избегайте создания папки `shared/types`. Она группирует несвязанные вещи только на основе свойства «быть типом», и это свойство обычно бесполезно при поиске кода в проекте.

:::

Второй случай часто встречается в проектах с Redux без RTK. Ваш окончательный тип хранилища доступен только после того, как вы соедините все редьюсеры, но этот тип хранилища нужен селекторам, которые вы используете в приложении. Например, вот типичное определение хранилища в Redux:

```ts title="app/store/index.ts"
import { combineReducers, rootReducer } from "redux";

import { songReducer } from "entities/song";
import { artistReducer } from "entities/artist";

const rootReducer = combineReducers(songReducer, artistReducer);

const store = createStore(rootReducer);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;
```

Было бы неплохо иметь типизированные хуки `useAppDispatch` и `useAppSelector` в `shared/redux`, но они не могут импортировать `RootState` и `AppDispatch` из слоя App из-за [правила импорта для слоёв][import-rule-on-layers]:

> Модуль в слайсе может импортировать другие слайсы только в том случае, если они расположены на слоях строго ниже.

Рекомендуемое решение в этом случае — создать неявную зависимость между слоями Shared и App. Эти два типа, `RootState` и `AppDispatch`, вряд ли изменятся, и они будут знакомы разработчикам на Redux, поэтому неявная связь вряд ли станет проблемой.

В TypeScript это можно сделать, объявив типы как глобальные, например так:

```ts title="app/store/index.ts"
/* то же содержимое, что и в блоке кода до этого… */

declare type RootState = ReturnType<typeof rootReducer>;
declare type AppDispatch = typeof store.dispatch;
```

```ts title="shared/redux/index.ts"
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

[import-rule-on-layers]: /docs/reference/layers#import-rule-on-layers
[ext-type-fest]: https://github.com/sindresorhus/type-fest
[ext-zod]: https://zod.dev
