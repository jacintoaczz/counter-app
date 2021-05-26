import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";

// Importacion de estilos
import "./index.css";

const rootDiv = document.querySelector("#root");

ReactDOM.render(<CounterApp value={100} />, rootDiv);
