import { combineReducers } from "redux";
import { favouriteVideosList } from "./favouriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";
import mostPopularVideos from "./mostPopulareVideosReducer";
import { commentsByVideoId } from "./commentsByVideoIdReducer";
import { relatedVideosByVideoId } from "./relatedVideosByVideoIdReducer";
import { channelDetailsByChannelId } from "./channelDetailsByChannelIdReducer";
import { searchVideos } from "./searchVideosReducer";
import { selectedVideoByVideoId } from "./selectedVideoByVideoIdReducer";
import { channelVideosByChannelRelatedPlaylistUpload } from "./channelVideosByChannelRelatedPlaylistUploadReducer";


export default combineReducers({ 
    favouriteVideosList, 
    videosData, 
    channelData,
    mostPopularVideos: mostPopularVideos,
    comments: commentsByVideoId,
    relatedVideos: relatedVideosByVideoId,
    channelDetails: channelDetailsByChannelId,
    searchResult : searchVideos,
    selectedVideoDetails: selectedVideoByVideoId,
    channelVideos: channelVideosByChannelRelatedPlaylistUpload
 });