import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../constants/constants";

// add video to favorite list 
export const addToFavorite = (data) =>{
    return {
        type : ADD_TO_FAVORITE,
        payload: data
    }
};

export const removeToFavorite = (data) =>{
    return{
        type: REMOVE_FROM_FAVORITE,
        payload: data
    }
}