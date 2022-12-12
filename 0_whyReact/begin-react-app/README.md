# Getting Started with Create React App

[basicConcept](https://github.com/gtengine/reactBasic/tree/main/0_whyReact/basicConcept)에서 **React**를 import하여 기본적이고 필수적인 요소들에 대해서 알아보았다.<br><br>

여기서는 `create-react-app` 기능을 사용하여 react를 다룰 것이다. `create-react-app`은 하나의 방식이며, 이 방식을 사용하면 react application을 만드는 데에 훨씬 쉽게 작업할 수 있다. 왜냐하면 개발을 위한 많은 스크립트들과 많은 사전 설정들을 준비해주기 때문이다. 개발 서버에 호스팅, 자동으로 새로고침, 즉각적인 css 반영 등 편하고 효율적으로 개발할 수 있도록 많은 기능을 지원해준다.

## 환경 설정

### node js 설치

[nodejs 공식 홈페이지](https://nodejs.org/ko/)에서 nodejs를 설치한다.

설치가 완료되면 터미널을 열고,

```
node -v
```

명령어를 입력하여 버전을 확인한다. 버전이 잘 출력되면 정상적으로 잘 설치된 것이다.

### create-react-app

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

#### package.json
