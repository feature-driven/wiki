---
sidebar_position: 4
---

# v1에서 v2로의 마이그레이션

## v2로의 전환 이유

**feature-slices**의 원래 개념은 [2018년에 발표되었습니다][ext-tg-spb].

그 이후로 여러 방법론이 발전하면서 개념이 확장되었지만, 기본 원칙은 유지되었습니다 **[기본 원칙 참고][ext-v1]**:

- 표준화된 프론트엔드 프로젝트 구조 사용
- *비즈니스 로직*에 따라 애플리케이션을 우선적으로 분리
- 의도하지 않은 부작용과 순환 의존성 방지하기 위해 *독립적인 기능* 단위 사용 
- 모듈 내부로 직접 접근하지 않도록 *공용 API*를 사용하여 구조를 안정화 

그러나 이전 버전의 방법론에는 여전히 몇 가지 **개선점**이 필요했습니다. 

- 반복적인 코드(보일러플레이트)를 유발하는 경우가 있음
- 코드베이스가 복잡해지고, 추상화 간의 규칙이 모호해지는 경우가 있음
- 암묵적인 아키텍처 설계 방식이 프로젝트 확장과 신규 입사자의 온보딩을 어렵게 함

새로운 버전([v2][ext-v2])은 기존 장점을 유지하면서도 **이러한 단점을 해결**하도록 설계되었습니다.

또한 2018년 이후, [또 다른 유사한 방법론][ext-fdd-issues]인 [**feature-driven**][ext-fdd]이 개발되었으며, 이는 [Oleg Isonen][ext-kof]에 의해 처음 발표되었습니다.

두 가지 접근 방식을 통합한 후, **기존의 실무를 개선**하고 발전시켜 애플리케이션을 더 유연하고 명확하며 효율적으로 만들었습니다.

> 이러한 변경 사항은 방법론의 이름에도 영향을 주어, 이제는 "feature-sliced"라고 불리게 되었습니다.  

## 프로젝트를 v2로 마이그레이션하는 이유

> `WIP:` 현재 방법론 버전은 개발 중이며 일부 세부 사항이 변경될 수 있습니다.

#### 🔍 더 직관적이고 간단한 아키텍처

v2 방법론은 **더 직관적이고 일반적인 추상화를 제공하여 개발자가 로직 분리를 쉽게 할 수 있게 합니다.**

이를 통해 신규 인력의 온보딩이 수월해지며, 프로젝트 상태를 빠르게 이해하고 애플리케이션의 비즈니스 로직을 효과적으로 분배하는 데 도움이 됩니다.

#### 📦 더 유연하고 실용적인 모듈화

v2 방법론은 **로직을 더 유연하게 배치할 수 있습니다:**

- 독립적인 부분을 처음부터 새로 리팩터링할 수 있는 유연성을 제공합니다.
- 불필요하게 의존성이 얽히지 않도록 동일한 추상화를 사용할 수 있습니다.
- 새로운 모듈을 추가할 때 *(layer => slice => segment)* 구조가 더 간단해집니다.

#### 🚀 더 풍부한 명세, 계획, 커뮤니티 지원

현재 `코어 팀`은 최신(v2) 버전의 방법론 개발에 활발히 참여하고 있습니다.

따라서 v2에는 다음과 같은 요소들이 추가로 제공됩니다:

- 더 다양한 사례와 문제 설명
- 적용에 관한 가이드
- 실전 예제 추가
- 신규 인력의 온보딩과 방법론 개념 학습을 위한 풍부한 문서 제공
- 아키텍처 개념과 규칙을 준수할 수 있도록 지원하는 툴킷

> 물론, 첫 번째 버전에 대한 사용자 지원도 제공될 것입니다. 하지만 최신 버전이 최우선 과제입니다.
>
> 향후 주요 업데이트가 있을 때, **팀과 프로젝트에 대한 부담 없이** 최신 버전(v2) 방법론에 접근할 수 있습니다. 

## 변경 사항

### `주요 변경` Layers

이제 방법론은 상위 레벨에서 layers를 명확히 구분합니다.

- `/app` > `/processes` > **`/pages`** > **`/features`** > `/entities` > `/shared`
- *이제 모든 것이 기능/페이지로 취급되지는 않습니다.*
- 이 접근 방식은 [layers에 대한 명시적인 규칙 설정][ext-tg-v2-draft]을 가능하게 합니다. 
- 모듈의 위치한 **layer가 높을수록** 더 많은 **컨텍스트**를 가집니다. 
  
  *(즉, 각 layer의 모듈은 하위 layer의 모듈만 가져올 수 있으며 상위 layer는 가져올 수 없습니다.)*

- 모듈의 위치한 **layer가 낮을수록** 변경에 따른 **위험과 책임이** 커집니다.   

  *(보통 하위 layer가 더 자주 사용되기 때문입니다)*

### `주요 변경` Shared

프로젝트의 src 루트에 있던 `/ui`, `/lib`, `/api`와 같은 인프라 추상화는 이제 `/src/shared`라는 별도 디렉토리에 분리됩니다.

- `shared/ui` - 여전히 애플리케이션의 공통 UI 컴포넌트 모음(선택 사항)
  - *기존의 `Atomic Design` 사용도 가능합니다.*
- `shared/lib` - 로직 구현을 위한 보조 라이브러리 모음
  - *헬퍼 코드가 모여있는 덤프는 지양*
- `shared/api` - API에 접근하는 공용 진입점
  - *각 기능/페이지별로 로컬에 등록할 수 있지만, 권장하지 않음*
- 이전과 마찬가지로 `shared`에 비즈니스 로직에 대한 명시적 결합이 없어야 합니다. 
  - *필요하다면 해당 관계를 `entities` 레벨이나 상위 레벨로 올려야 합니다.*

### `새로 추가된` Entities, Processes

v2에서는 로직 복잡성과 높은 결합을 줄이기 위한 **새로운 추상화**가 추가되었습니다.

- `/entities` - **business entities** layer, 프론트엔드에서 필요한 비즈니스 모델이나 인위적인 entities를 포함하는 slices
  - *예시: `user`, `i18n`, `order`, `blog`*
- `/processes` - 애플리케이션 전반에 걸친 **비즈니스 프로세스** layer
  - **선택적 layer**, 보통 *로직이 확장되어 여러 페이지에 걸쳐 분산되기 시작할 때* 사용을 권장
  - *예시: `payment`, `auth`, `quick-tour`*

### `주요 변경` 추상화 및 네이밍

이제 특정 추상화 및 [명확한 네이밍 권장사항][refs-adaptability]이 정의되었습니다.

[disc-process]: https://github.com/feature-sliced/documentation/discussions/20
[disc-features]: https://github.com/feature-sliced/documentation/discussions/23
[disc-entities]: https://github.com/feature-sliced/documentation/discussions/18#discussioncomment-422649
[disc-shared]: https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453020

[disc-ui]: https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453132
[disc-model]: https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-472645
[disc-api]: https://github.com/feature-sliced/documentation/discussions/66

#### 레이어

- `/app` — **애플리케이션 초기화 layer**
  - *이전 명칭: `app`, `core`,`init`, `src/index` (가끔 사용됨)*
- `/processes` — [**비즈니스 process layer**][disc-process]
  - *이전 명칭: `processes`, `flows`, `workflows`*
- `/pages` — **애플리케이션 페이지 layer**
  - *이전 명칭: `pages`, `screens`, `views`, `layouts`, `components`, `containers`*
- `/features` — [**기능 모듈 layer**][disc-features]
  - *이전 명칭: `features`, `components`, `containers`*
- `/entities` — [**비즈니스 entity layer**][disc-entities]
  - *이전 명칭: `entities`, `models`, `shared`*
- `/shared` — [**재사용 가능한 인프라 코드 layer**][disc-shared] 🔥
  - *이전 명칭: `shared`, `common`, `lib`*

#### 세그먼트

- `/ui` — [**UI segment**][disc-ui] 🔥
  - *이전 명칭: `ui`, `components`, `view`*
- `/model` — [**비즈니스 로직 segment**][disc-model] 🔥
  - *이전 명칭: `model`, `store`, `state`, `services`, `controller`*
- `/lib` — **보조 코드 segment**
  - *이전 명칭: `lib`, `libs`, `utils`, `helpers`*
- `/api` — [**API segment**][disc-api]
  - *이전 명칭: `api`, `service`, `requests`, `queries`*
- `/config` — **애플리케이션 설정 segment**
  - *이전 명칭: `config`, `env`, `get-env`*

### `개선된` 낮은 결합

이제 새로운 layers 덕분에 모듈 간 [낮은 결합 원칙을 준수][refs-low-coupling]하기가 훨씬 쉬워졌습니다.

*동시에, 모듈 간 "결합을 해제"하기 어려운 상황은 가능한 한 피하는 것이 여전히 권장됩니다.* 

## 참고 자료

- [React SPB Meetup #1 발표 노트"][ext-tg-spb]
- [React Berlin Talk - Oleg Isonen "Feature Driven Architecture"][ext-kof-fdd]
- [v1과의 비교 (커뮤니티 채팅)](https://t.me/feature_sliced/493)
- [v2에 대한 새로운 아이디어와 설명 (atomicdesign 채팅)][ext-tg-v2-draft]
- [새로운 버전 방법론 (v2)에 대한 추상화 및 네이밍 논의](https://github.com/feature-sliced/documentation/discussions/31)

[refs-low-coupling]: /docs/reference/slices-segments#zero-coupling-high-cohesion
[refs-adaptability]: /docs/about/understanding/naming

[ext-v1]: https://feature-sliced.github.io/featureslices.dev/v1.0.html
[ext-tg-spb]: https://t.me/feature_slices
[ext-fdd]: https://github.com/feature-sliced/documentation/tree/rc/feature-driven
[ext-fdd-issues]: https://github.com/kof/feature-driven-architecture/issues
[ext-v2]: https://github.com/feature-sliced/documentation
[ext-kof]: https://github.com/kof
[ext-kof-fdd]: https://www.youtube.com/watch?v=BWAeYuWFHhs
[ext-tg-v2-draft]: https://t.me/atomicdesign/18708
