import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constants/constants";

let initialSate = [];

export const favouriteVideosList = (state = initialSate, action) =>{
    switch(action.type){
        case ADD_TO_FAVOURITE: return [action.payload, ...state];
        case REMOVE_FROM_FAVOURITE: 
        let remainingVideos = state.filter((video)=> video.id.videoId !== action.payload)
        return [...remainingVideos];
        default:
            return state;
    }
}
