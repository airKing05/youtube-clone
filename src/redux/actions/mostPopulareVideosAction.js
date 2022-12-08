import { HOME_VIDEOS_REQUEST, SELECTED_VIDEO_REQUEST } from "../constants/constants";


export function getMostPopularVideos(){
    return {
        type: HOME_VIDEOS_REQUEST
    }
}


export function getVideoById(id){
    return {
        type: SELECTED_VIDEO_REQUEST,
        payload: id
    }
}