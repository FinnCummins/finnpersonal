import ReactDOM from "react-dom";

import {App} from "./components/app";

const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App />);