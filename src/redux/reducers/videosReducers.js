import { VIDEOS_LIST, SET_VIDEOS_LIST, SET_VIDEO_STATICS } from "../constants/constants";
let initialState = [];

export const videosData = (state = initialState, action) =>{
    switch(action.type){
       // case VIDEOS_LIST: return [action.payload, ...state];
        case SET_VIDEOS_LIST: return [...action.payload];
        default: return state;
    }
}