import { combineReducers } from "redux";
import { favoriteVideosList } from "./favoriteReducers";
import { videosData } from "./videosReducers";
import { channelData } from "./channelReducers";
import mostPopularVideos from "./mostPopulareVideosReducer";
import { commentsByVideoId } from "./commentsByVideoIdReducer";
import { channelDetailsByChannelId } from "./channelDetailsByChannelIdReducer";
import { searchVideos } from "./searchVideosReducer";
import { selectedVideoByVideoId } from "./selectedVideoByVideoIdReducer";
import { channelVideosByChannelRelatedPlaylistUpload } from "./channelVideosByChannelRelatedPlaylistUploadReducer";
import { relatedVideosByChannelId } from "./relatedVideosByChannelIdReducer";
import { authReducer } from "./authReducer";
import { subscriptionsOfAuthUserReducer } from "./subscriptionsOfAuthUserReducer";


export default combineReducers({ 
    favoriteVideosList, 
    videosData, 
    channelData,
    mostPopularVideos: mostPopularVideos,
    comments: commentsByVideoId,
    relatedVideos: relatedVideosByChannelId,
    channelDetails: channelDetailsByChannelId,
    searchResult : searchVideos,
    selectedVideoDetails: selectedVideoByVideoId,
    channelVideos: channelVideosByChannelRelatedPlaylistUpload,
    auth: authReducer,
    subscriptions: subscriptionsOfAuthUserReducer,
 });