import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {App} from "./components/app";

const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, 
    <Router>
        <App />
    </Router>
);