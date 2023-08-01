import React from "react";
import ReactDOM from "react-dom/client";

//generating html element using JS syntax
const jsElement = document.createElement("span");
jsElement.innerHTML = "Hello World using JavaScript";
jsElement.style.color = "green";
document.getElementById("using-js").appendChild(jsElement);

//generating html element using React
const reactChild1 = React.createElement(
  "div",
  { style: { color: "red" }, key: "reactChild1" },
  "Hello World from React Child1"
);
const reactChild2 = React.createElement(
  "div",
  { style: { color: "red" }, key: "reactChild2" },
  "Hello World from React Child2"
);
const rootElement = ReactDOM.createRoot(document.getElementById("using-react"));
rootElement.render([reactChild1, reactChild2]);
