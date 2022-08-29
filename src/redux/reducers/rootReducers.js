import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";

export default combineReducers({ favouriteVideosList, videosData, channelData });