import { HOME_VIDEOS_REQUEST, SELECTED_VIDEO_REQUEST } from "../constants/constants";


export function getMostPopularVideos(){
    // console.log("getmost pop")
    return {
        type: HOME_VIDEOS_REQUEST
    }
}


export function getVideoById(){
    return {
        type: SELECTED_VIDEO_REQUEST
    }
}