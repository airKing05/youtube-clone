import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";
import mostPopularVideos from "./mostPopulareVideosReducer";



export default combineReducers({ 
    favouriteVideosList, 
    videosData, 
    channelData,
    mostPopularVideos: mostPopularVideos,
 });