import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Favereducer from "./favreducer";



const store = createStore (Favereducer, composeWithDevTools())