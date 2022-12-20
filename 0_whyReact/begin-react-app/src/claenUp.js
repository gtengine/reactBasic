import { useEffect, useState } from "react";

const Hello = () => {
  const effectFn = () => {
    console.log("create ^^");
    return destroyedFn;
  };
  const destroyedFn = () => {
    console.log("destroyed TT");
  };
  useEffect(effectFn, []);
  return <h1>Hello!!!</h1>;
};

const CleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClickHandler = () => setShowing(!showing);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClickHandler}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default CleanUp;
