import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constants/constants";

let initialSate = localStorage.getItem('favourite') != null ? JSON.parse(localStorage.getItem('favourite')) : [];
export const favouriteVideosList = (state = initialSate, action) =>{
    switch(action.type){
        case ADD_TO_FAVOURITE: 
            localStorage.setItem('favourite', JSON.stringify([action.payload, ...state]));
            return [action.payload, ...state];
        case REMOVE_FROM_FAVOURITE: 
            let remainingVideos = state.filter((video)=> video[0].videoData.id.videoId !== action.payload)
            localStorage.setItem('favourite', JSON.stringify([...remainingVideos]));
            return [...remainingVideos];
        default:
            return state;
    }
}
