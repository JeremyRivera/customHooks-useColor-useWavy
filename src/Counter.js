import { useEffect, useState } from "react";
import useWavy from "./useWavy";
import "./styles.css";
import useColor from "./useColor";

export default function Counter() {
  const { counter, increment, decrement } = useWavy();
  useColor();
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => increment()}>+ 1</button>
      <button onClick={() => decrement()}>- 1</button>
    </>
  );
}
