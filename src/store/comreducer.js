import { combineReducers } from "redux";
import AddFavereducer from "./add";
import Favereducer from "./favreducer";
import starReducer from "./starreducer";


export default combineReducers({
sreducer:starReducer,
freducer:Favereducer,
Add:AddFavereducer
 
 })