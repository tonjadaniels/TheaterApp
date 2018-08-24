import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const shows = {
  shows: ["Seize The King", "Diana", "The Year to Come", "Bumble"]
};

ReactDOM.render(<App data={shows} />, document.getElementById("root"));
registerServiceWorker();
