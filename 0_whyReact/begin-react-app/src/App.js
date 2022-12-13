import Button from "./Button";
import styles from "./App.module.css";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onClickHandler = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClickHandler} />
    </div>
  );
};

export default App;
