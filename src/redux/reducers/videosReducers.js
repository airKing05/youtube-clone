import { SET_VIDEOS_LIST } from "../constants/constants";
let initialState = [];

export const videosData = (state = initialState, action) =>{
    switch(action.type){
       // case VIDEOS_LIST: return [action.payload, ...state];
        case SET_VIDEOS_LIST: return [...action.payload];
        default: return state;
    }
}