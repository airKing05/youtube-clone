import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";
import {genralReducer} from './genralReducer';

export default combineReducers({ favouriteVideosList, videosData, channelData, genralReducer });