import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./comreducer";
import { connect } from "react-redux";

const mystore= createStore(combineReducers,composeWithDevTools())





export default mystore