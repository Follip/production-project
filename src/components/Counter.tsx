import React from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className={classes.btn}>
      <button onClick={increment}>increment</button>
      <span>{count}</span>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
