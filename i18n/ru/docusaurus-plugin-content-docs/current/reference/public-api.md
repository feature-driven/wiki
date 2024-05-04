---
sidebar_position: 3
sidebar_label: Public API
pagination_next: about/index
---

# Публичное API модуля приложения

Каждая сущность методологии проектируется как **удобный в использовании и интеграции модуль.**

## Цели {#goals}

Удобство использования и интеграции модуля достигается через выполнение *ряда целей*:

1. Приложение должно быть **защищено от изменений** внутренней структуры отдельных модулей
1. Переработка внутренней структуры модуля **не должна затрагивать** другие модули
1. Существенные изменения поведения модуля должны быть **легко определяемы**
    > **Существенные изменения поведения модуля** - изменения, ломающие ожидания сущностей-пользователей модуля.

Достичь этих целей позволяет введение публичного интерфейса (Public API), представляющего собой единую точку доступа к возможностям модуля и определяющего "контракт" взаимодействия модуля с внешним миром.

:::info Важно

Структура сущности должна иметь единую точку входа, предоставляющую публичный интерфейс

:::

```sh
└── features/                          # 
   └── auth-form/                      # Внутренняя структура фичи
            ├── ui/                    #
            ├── model/                 #
            ├── {...}/                 #
            └── index.ts               # Энтрипоинт фичи с ее публичным API
```

```ts title="**/**/index.ts"
export { Form as AuthForm } from "./ui"
export * as authFormModel from "./model"
```

## Требования к публичному API {#requirements-for-the-public-api}

Выполнение этих требований позволяет свести взаимодействие с модулем к **выполнению публичного интерфейса-контракта** и, тем самым, достичь надежности и удобства в использовании модуля.

### 1. Контроль доступа {#1-access-control}

Public API должен осуществлять **контроль доступа** к содержимому модуля

- Другие части приложения могут использовать **только те сущности модуля, которые представлены в публичном интерфейсе**
- Внутренняя часть модуля за пределами публичного интерфейса **доступны только самому модулю**.

#### Примеры {#examples}

##### Отстранение от приватных импортов {#suspension-from-private-imports}

- **Плохо**: Идет обращение напрямую к внутренним частям модуля, минуя публичный интерфейс доступа - опасно, особенно при рефакторинге модуля

    ```diff
    - import { Form } from "features/auth-form/components/view/form"
    ```

- **Хорошо:** API заранее экспортирует только нужное и разрешенное, разработчику модуля теперь нужно думать только о том, чтобы не ломать Public API при рефакторинге

    ```diff
    + import { AuthForm } from "features/auth-form"
    ```

### 2. Устойчивость к изменениям {#2-sustainability-for-changes}

Public API должен быть **устойчивым к изменениям** внутри модуля

- Изменения, ломающие поведения модуля, должны отражаться в изменении Public API

#### Примеры {#examples}

##### Абстрагирование от реализации {#abstracting-from-the-implementation}

Изменение внутренней структуры не должно приводить к изменению Public API

- **Плохо:** перемещение или переименование этого компонента внутри фичи приведет к необходимости рефакторить импорты во всех местах использования компонента.

    ```diff
    - import { Form } from "features/auth-form/ui/form"
    ```

- **Хорошо:** интерфейс фичи не отображает её внутреннюю структуру, внешние "пользователи" фичи не пострадают от перемещения или переименования компонента внутри фичи

    ```diff
    + import { AuthForm } from "features/auth-form"
    ```

### 3. Интегрируемость {#3-integrability}

Public API должен способствовать **легкой и гибкой интеграции**

- Должен быть удобен для использования остальными частями приложения, в частности, решать проблему коллизии имен

#### Примеры {#examples}

##### Коллизия имен {#name-collision}

- **Плохо:** будет коллизия имен

    ```ts title="features/auth-form/index.ts"
    export { Form } from "./ui"
    export * as model from "./model"
    ```

    ```ts title="features/post-form/index.ts"
    export { Form } from "./ui"
    export * as model from "./model"
    ```

    ```diff
    - import { Form, model } from "features/auth-form"
    - import { Form, model } from "features/post-form"
    ```

- **Хорошо:** коллизия решена на уровне интерфейса

    ```ts title="features/auth-form/index.ts"
    export { Form as AuthForm } from "./ui"
    export * as authFormModel from "./model"
    ```

    ```ts title="features/post-form/index.ts"
    export { Form as PostForm } from "./ui"
    export * as postFormModel from "./model"
    ```

    ```diff
    + import { AuthForm, authFormModel } from "features/auth-form"
    + import { PostForm, postFormModel } from "features/post-form"
    ```

##### Гибкое использование {#flexible-use}

- **Плохо:** неудобно писать, неудобно читать, "пользователь" фичи страдает

    ```diff
    - import { storeActionUpdateUserDetails } from "features/auth-form"
    - dispatch(storeActionUpdateUserDetails(...))
    ```

- **Хорошо:** "пользователь" фичи получает доступ к нужным вещам итеративно и гибко

    ```diff
    + import { authFormModel } from "features/auth-form"
    + dispatch(authFormModel.effects.updateUserDetails(...)) // redux
    + authFormModel.updateUserDetailsFx(...) // effector
    ```

##### Разрешение коллизий {#resolution-of-collisions}

Коллизия имен должна решаться на уровне публичного интерфейса, а не реализации

- **Плохо:** коллизия имен решается на уровне реализации

    ```ts title="features/auth-form/index.ts"
    export { AuthForm } from "./ui"
    export { authFormActions, authFormReducer } from "model"
    ```

    ```ts title="features/post-form/index.ts"
    export { PostForm } from "./ui"
    export { postFormActions, postFormReducer } from "model"
    ```

- **Хорошо:** коллизия имен решается на уровне интерфейса

    ```ts title="features/auth-form/model.ts"
    export { actions, reducer }
    ```

    ```ts title="features/auth-form/index.ts"
    export { Form as AuthForm } from "./ui"
    export * as authFormModel from "./model"
    ```

     ```ts title="features/post-form/model.ts"
    export { actions, reducer }
    ```

    ```ts title="features/post-form/index.ts"
    export { Form as PostForm } from "./ui"
    export * as postFormModel from "./model"
    ```

## О реэкспортах {#about-re-exports}

В JavaScript публичный интерфейс модуля создается с помощью реэкспорта сущностей изнутри модуля в `index` файле:

```ts title="**/**/index.ts"
export { Form as AuthForm } from "./ui"
export * as authModel from "./model"
```

### Недостатки {#disadvantages}

- В большинстве популярных бандлеров из-за реэкспортов **хуже работает код-сплиттинг**, т.к. [tree-shaking](https://webpack.js.org/guides/tree-shaking/) при таком подходе может безопасно отбросить только модуль целиком, но не его часть.
   > Например, импорт `authModel` в модели страницы приведет к попаданию компонента `AuthForm` в чанк этой страницы, даже если этот компонент там не используется.

- Как следствие, инициализация чанка становится дороже, т.к. браузер должен обработать все модули в нем, в том числе и те, что попали в бандл "за компанию"

### Возможные пути решения {#possible-solutions}

- `webpack` позволяет отметить файлы-реэкспорты как [**side effects free**](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) - это разрешает `webpack` использовать более агрессивные оптимизации при работе с таким файлом

## См. также {#see-also}

- [(Обсуждение) Public API абстракции][disc-src]
- [Принципы **SOLID**][ext-solid]
- [Паттерны **GRASP**][ext-grasp]

[disc-src]: https://github.com/feature-sliced/documentation/discussions/41
[ext-solid]: https://ru.wikipedia.org/wiki/SOLID
[ext-grasp]: https://ru.wikipedia.org/wiki/GRASP
