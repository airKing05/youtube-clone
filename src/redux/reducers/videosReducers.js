import { SET_VIDEOS_LIST } from "../constants/constants";
let initialState = localStorage.getItem('video_list') != null ? JSON.parse(localStorage.getItem('video_list')) : [];;

export const videosData = (state = initialState, action) =>{
    switch(action.type){
       // case VIDEOS_LIST: return [action.payload, ...state];
        case SET_VIDEOS_LIST: 
            localStorage.setItem('video_list', JSON.stringify([...action.payload]));
            localStorage.removeItem('favourite');
            return [...action.payload];
        default: return state;
    }
}