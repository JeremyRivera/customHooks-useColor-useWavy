import { useEffect, useState } from "react";
import "./styles.css";
import Counter from "./Counter";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <h1>Hit the 'f' key then Another key!</h1>
      <Counter />
      <Home />
    </div>
  );
}
