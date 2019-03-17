React + MobX Todo list
---

기존에는 Class 컴포넌트 기반으로 리액트 어플리케이션을 작성해 왔는데, 이 기회를 빌어 React Hooks API 를 적극 사용해 봄으로써, 기존 Class 컴포넌트의 문제점을 파악하고 개선할 수 있을 것으로 생각합니다. 기본적인 설계 영감은 DDD(Domain Driven Design) 에서 얻었음을 알려드립니다. 

## 프로젝트 구조


- Models
    - Entities
        - 도메인 주도 개발에서 식별(Unique ID)이 가능한 개체를 말함
    - Value Objects
        - 고유 식별자는 없지만 값으로써 취급되는 개체, 보통은 enum 혹은 union (현재 구조상에는 없음)
- Stores
    - 리액트에서 Redux 혹은 MobX의 Store 를 말함
    - 도메인 주도 개발의 Repository 와 비슷한 성질로써 엔티티의 루트
    - Entities 에 대한 CRUD 를 수행함
- Utils
    - 유틸리티성 함수들의 모음
- Views
    - Components
        - 뷰의 최소 단위
    - 추후 어플리케이션이 커지면 Fragments 와 Pages 로 분리
- App
    - 리액트 어플리케이션의 루트

## 사용된 라이브러리 및 요소

- React Hooks: 16.8 에서 공개된 API 로 함수 컴포넌트에서 클래스 컴포넌트에서 가능한 작업들을 가능하게 함
- Create React App: 리액트 스켈레톤 생성기
- Typescript: 타입 체크가 가능한 자바스크립트 확장 언어 
- CSS Module: Create React App 에서 지원하는 *.module.scss 확장자를 사용하여 CSS 의 스코프를 제한
- SCSS: CSS 의 확장
- MobX: 리액티브(Rx 와 혼동하지 말 것)한 상태 관리 라이브러리 (React, Vue, Angular 사용 가능)

## 추후 계획

- 외부 라이브러리 없이 스타일을 좀 더 다듬을 예정
- Detail 화면 구현 예정
- 백엔드 구현 (+ Persistence Layer)
- SSR 랜더링을 위한 Webpack 설정 (Razzle 참조)
- 태그 및 태그별 목록 구현 (Trello 참조)
- 드래그 앤 드롭 구현
- Due date 구현 예정

