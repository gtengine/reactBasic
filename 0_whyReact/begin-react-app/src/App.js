import Button from "./Button";
import styles from "./App.module.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [searchWord, setSearchWord] = useState("");

  const onClickHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const onChangeHandler = (event) => setSearchWord(event.target.value);
  console.log("I run all the time.");

  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  };

  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("SEARCH FOR", searchWord);
  }, [searchWord]);
  useEffect(() => {
    console.log("I run when both change.");
  }, [counter, searchWord]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here."
        value={searchWord}
        onChange={onChangeHandler}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClickHandler} />
    </div>
  );
};

export default App;
