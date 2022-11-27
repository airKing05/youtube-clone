import { HOME_VIDEOS_REQUEST } from "../constants/constants";


export function getMostPopularVideos(){
    console.log("getmost pop")
    return {
        type: HOME_VIDEOS_REQUEST
    }
}