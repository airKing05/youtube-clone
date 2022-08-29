import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";

export default combineReducers({ favouriteVideosList, videosData });