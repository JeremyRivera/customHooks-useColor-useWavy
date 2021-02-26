import React from "react";

const Home = () => {
  let change = () => {
    window.location = "/home-but-does-not-switch-lol";
  };
  return <button onClick={change}>Home</button>;
};

export default Home;
