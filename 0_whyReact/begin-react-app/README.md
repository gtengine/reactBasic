# Getting Started with Create React App

[basicConcept](https://github.com/gtengine/reactBasic/tree/main/0_whyReact/basicConcept)에서 **React**를 import하여 기본적이고 필수적인 요소들에 대해서 알아보았다.<br><br>

여기서는 `create-react-app` 기능을 사용하여 react를 다룰 것이다. `create-react-app`은 하나의 방식이며, 이 방식을 사용하면 react application을 만드는 데에 훨씬 쉽게 작업할 수 있다. 왜냐하면 개발을 위한 많은 스크립트들과 많은 사전 설정들을 준비해주기 때문이다. 개발 서버에 호스팅, 자동으로 새로고침, 즉각적인 css 반영 등 편하고 효율적으로 개발할 수 있도록 많은 기능을 지원해준다.

## node js 설치

[nodejs 공식 홈페이지](https://nodejs.org/ko/)에서 nodejs를 설치한다.

설치가 완료되면 터미널을 열고,

```
node -v
```

명령어를 입력하여 버전을 확인한다. 버전이 잘 출력되면 정상적으로 잘 설치된 것이다.

## create-react-app

terminal을 열고 프로젝트를 생성할 디렉토리로 이동하여 명령어를 입력하면 프로젝트가 생성되는데, 나는 패키지 관리 툴을 `yarn`을 사용할 것이기 때문에 먼저 설치해주겠다.

```
npm install -g yarn
```

그리고나서 프로젝트를 생성한다. project-name은 본인이 생성할 project의 이름으로 자유롭게 설정할 수 있다.(대문자는 쓸 수 없다.)

```
npx create-react-app project-name
or
yarn create react-app project-name
```

## 파일 설정

기본으로 생성된 파일들 중 _logo.svg, reportWebVitals.js, setupTest.js, App.css, App.test.js, index.css는 필요가 없으니 삭제해주도록하자._<br><br>

## Create Component

앞으로 만들어지는 모든 컴포넌트들은 `src` 폴더 안에 생성하여 작업하면된다. 이 전에 공부했던 것과 같이 **컴포넌트들은 function 형태**로 만들어주면 되고, 다른 컴포넌트에서 import 하여 사용할 수 있도록 `export default Component`를 꼭 해주도록 한다.

## module.css

각 컴포넌트에 대해 서로 다른 스타일을 적용하고 싶을 것이다. 예를 들어, 모든 버튼이 똑같이 생겼다면 UI 적으로도, UX 적으로도 너무 좋지 않은 페이지가 될 것이다. 그럴 경우에 `name.module.css` 파일을 만들어 css 문법으로 각각의 컴포넌트에 주고 싶은 스타일을 _className_ 미리 만들고, 적용할 컴포넌트에 import하여 `className={styles.className}`으로 불러오면 서로 다른 스타일을 적용할 수 있다.

_※ 만약 같은 스타일을 적용하고 싶은 컴포넌트가 있다고 했을 때, className으로 스타일을 적용하고 있어서 같은 className을 사용해도 되는지 걱정된다면 그럴 필요는 없다. 같은 스타일을 가진 className을 여러 컴포넌트에서 중복 사용했어도 react가 알아서 랜덤한 class로 compile하여 브라우저에 전송하기 때문에 서로 다른 class를 가지고 있기 때문이다._