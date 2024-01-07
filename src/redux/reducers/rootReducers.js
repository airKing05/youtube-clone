import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";
import mostPopularVideos from "./mostPopulareVideosReducer";
import { commentsByVideoId } from "./commentsByVideoIdReducer";
import { relatedVideosByVideoId } from "./relatedVideosByVideoIdReducer";
import { channelDetailsByChannelId } from "./channelDetailsByChannelIdReducer";



export default combineReducers({ 
    favouriteVideosList, 
    videosData, 
    channelData,
    mostPopularVideos: mostPopularVideos,
    comments: commentsByVideoId,
    relatedVideos: relatedVideosByVideoId,
    channelDetails: channelDetailsByChannelId
 });