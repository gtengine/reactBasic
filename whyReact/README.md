# Html vs. React

front-end 개발을 할 때, html을 사용하여 개발하는 상황과 React를 사용하여 개발하는 상황에 대해서 비교해 보고자 한다. 지금은 사용하지 않는 번거로운 방식도 직접 코딩해보며 비교해보고 어떤 방식이 더 효율적이고 왜 효율적인지 알아보자.<br><br>
코딩하면서 깨달은 점과 스터디를 진행하면서 꼭 알아야 하는 핵심 개념에 대해서는 아래에 글로 작성해놓겠다.

## Html

Html과 Javascript 또는 Typescript로 작업을 한다면 매번 document에서 element를 가져오고, eventListener에 handler를 달아주어야 한다.<br>
[vanillaJs.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/vanillaJs.html) 예제 코드와 같이 간단한 코드로 이루어진 프로그램이라면 할만 하겠지만, 실제 서비스 개발에는 하나의 액션에 여러 연산이 이루어진다.
그렇다면 하나의 페이지에 여러 액션이 들어가는 경우에는 어떻게 될까? 코드의 양이 셀수 없이 많아질 것이다.<br>
그래도 이 방법이 유일한 방법이라면 어쩔 수 없겠지만 계속해서 더 좋은 방식이 개발되고 있고 그 중 React를 사용한 방식과 비교해 볼 것이다.<br>

## React

React는 html 파일에 직접 element들을 생성하지 않는다. 스크립트 파일에서 각 element를 생성하여 html 파일로 불러오는 방식을 사용한다.
이 방식으로 작업하기 위해서는 **React-js**와 **React-dom** 이 두 라이브러리를 필수적으로 설치해야한다.<br>
**react-js는 interactive UI를 만들 수 있도록** 하는 엔진과 같고, **react-dom은 생성된 모든 react element들을 html의 body에 배치할 수 있도록** 해준다.<br><br>
**_vanilla js에서는 html을 먼저 만들고 그 것을 javascript로 가져와서 html을 수정하는 방식이라면, React-JS에서는 모든 것이 javascript로 시작하고 그 다음에 html이 된다. 따라서 React-JS는 유저에게 보여질 내용을 필요에 맞게 컨트롤할 수 있다._**<br><br>
**_또한 Html로 만들어진 페이지에서는 어떤 요소의 값이 하나라도 변경되면 페이지 자체가 re-rendering 되는 반면, React로 만들어진 페이지에서는 오로지 변경되는 값만 바뀐다._**

### JSX

JSX는 javascript를 확장한 문법이다. 기본적으로 [useReact.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/useReact.html) 예제에서처럼 React element들을 생성할 수 있도록 한다. 하지만 코딩 방식이 html 문법과 비슷하기 때문에 [useJsx.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/useJsx.html) 더 편하게 작업할 수 있다.<br>
jsx를 사용하기 위해서는 html 코드를 javascript 코드로 변환해주는 `transcompiler`가 필요하다. 예제에서는 babel을 사용했다.<br><br>
**_jsx 문법으로 컴포넌트를 생성할 때에는 변수 선언이 아닌 함수 선언으로 하여, 첫 글자는 대문자로 만들어야한다._**<br><br>
함수로 생성하는 이유는 모든 컴포넌트들을 감싸고 있는 컨테이너 안에 각 컴포넌트들을 html 문법과 같이 레이어 구조로 쌓아서 렌더링하기 위함이고, 첫 글자를 대문자로 하는 이유는 소문자로 컴포넌트의 이름을 생성하면 React와 JSX는 이 컴포넌트가 html의 tag라고 인식하기 때문에 에러가 발생하기 때문이다.

### State

페이지 내에서 어떤 액션이나 기능에 의해 변경되는 값을 UI에 반영하기 위해서는 렌더링을 다시 해줘야 한다. 따라서 값이 바뀌는 이벤트가 있을 때마다 계속 `ReactDOM.render()` 함수를 호출해야한다는 것인데 이렇게 되면 굉장히 비효율적이다. 이를 효율적으로 해결할 수 있는 방법이 **state**이다.<br><br>
[state.html](https://github.com/gtengine/reactBasic/blob/main/whyReact/state.html)에서처럼 **_state는 현재 값을 출력하는 getter와 현재 값에서 변경되는 값으로 업데이트를 해주는 setter가 배열로 이루어져 있다. 또한 state 생성 시에 초기값을 설정해줄 수 있기 때문에 초기값에서 업데이트되는 값을 setter에 넣어주고 getter로 출력하면 값이 변경될 때 알아서 자신이 속해있는 컴포넌트를 re-rendering을 하며 값이 바뀐 부분만 수정하여 UI에 반영할 수 있다._**

_※ 직접 state의 값을 직접 변경하는 것보다 함수를 활용해 계산하는 것이 더 안전하다._
