# Html vs. React

## Html

Html과 javascript 또는 Typescript로 작업을 한다면 매번 document에서 element를 가져오고, eventListener에 handler를 달아주어야 한다.<br>
[vanillaJs.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/vanillaJs.html) 예제 코드와 같이 간단한 코드로 이루어진 프로그램이라면 할만 하겠지만, 실제 서비스 개발에는 하나의 액션에 여러 연산이 이루어진다.
그렇다면 하나의 페이지에 여러 액션이 들어가는 경우에는 어떻게 될까? 코드의 양이 셀수 없이 많아질 것이다.<br>
그래도 이 방법이 유일한 방법이라면 어쩔 수 없겠지만 계속해서 더 좋은 방식이 개발되고 있고 그 중 React를 사용한 방식과 비교해 볼 것이다.<br>

## React

React는 html 파일에 직접 element들을 생성하지 않는다. 스크립트 파일에서 각 element를 생성하여 html 파일로 불러오는 방식을 사용한다.
이 방식으로 작업하기 위해서는 **_React-js_**와 **_React-dom_** 이 두 라이브러리를 필수적으로 설치해야한다.<br>
**react-js는 interactiva UI를 만들 수 있도록** 하는 엔진과 같고, **react-dom은 모든 react element들을 Html Body에 배치할 수 있도록** 해준다.<br><br>

**_vanilla js에서는 html을 먼저 만들고 그 것을 javascript로 가져와서 html을 수정하는 방식이라면, React-JS에서는 모든 것이 javascript로 시작하고 그 다음에 html이 된다. 따라서 React-JS는 유저에게 보여질 내용을 필요에 맞게 컨드롤할 수 있다는 것이다._**

### JSX

JSX는 javascript를 확장한 문법이다. 기본적으로 [useReact.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/useReact.html) 예제에서처럼 React element들을 생성할 수 있도록 한다. 하지만 코딩 방식이 html 문법과 비슷하기 때문에 [useJsx.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/useJsx.html) 더 편하게 작업할 수 있다.<br>
jsx를 사용하기 위해서는 html 코드를 javascript 코드로 변환해주는 transcompiler가 필요하다. 예제에서는 babel을 사용했다.<br>
**_jsx 문법으로 컴포넌트를 생성할 때에는 변수 선언이 아닌 함수 선언으로 하여, 첫 글자는 대문자로 만들어야한다._**<br>
함수로 생성하는 이유는 모든 컴포넌트들을 감싸고 있는 <Container /> 안에 각 컴포넌트들을 html 문법과 같이 레이어 구조로 쌓아서 렌더링하기 위함이고, 첫 글자를 대문자로 하는 이유는 소문자로 컴포넌트의 이름을 생성하면 React와 JSX는 이 컴포넌트가 html의 tag라고 인식하기 때문에 에러가 발생하기 때문이다.
