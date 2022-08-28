import { ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE } from "../constants/constants";

let initialSate = [];

export const favouriteVideosList = (state = initialSate, action) =>{
    switch(action.type){
        case ADD_TO_FAVOURITE: return [action.payload, ...state];
        case REMOVE_TO_FAVOURITE: 
        let remainingVideos = state.filter((video)=> video.id !== action.payload)
        return [...remainingVideos];
        default:
            return state;
    }
}
