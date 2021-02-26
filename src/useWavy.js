import { useState, useEffect } from "react";

export default function useWavy() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `The counter is ${counter}`;

    return () => {
      document.title = "react-app";
    };
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement
  };
}
