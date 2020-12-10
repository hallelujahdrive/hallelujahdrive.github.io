import "./demo.scss";
import "elm-accordion/dist/elm-accordion.min.js";
import "elm-accordion/dist/elm-accordion.min.css";

import Elm from "./src/Main.elm";

const app = Elm.Main.init ({
    node: document.getElementById("elm")!
});