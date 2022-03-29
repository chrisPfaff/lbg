import React from "react";
import {render} from "react-dom";
import Header from "./components/Header";


const App = () => {
  return (
    <Header/>
  )
}

render(<App />, document.getElementById("root"));



