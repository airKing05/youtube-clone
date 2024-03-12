import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../constants/constants";

let initialSate = localStorage.getItem('favorite') != null ? JSON.parse(localStorage.getItem('favorite')) : [];

export const favoriteVideosList = (state = initialSate, action) =>{
    switch(action.type){
        case ADD_TO_FAVORITE: 
            localStorage.setItem('favorite', JSON.stringify([action.payload, ...state]));
            return [action.payload, ...state];
        case REMOVE_FROM_FAVORITE: 
            let remainingVideos = state.filter((video)=> video[0].videoData.id.videoId !== action.payload)
            localStorage.setItem('favorite', JSON.stringify([...remainingVideos]));
            return [...remainingVideos];
        default:
            return state;
    }
}
