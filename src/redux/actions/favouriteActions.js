import { ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE } from "../constants/constants";

// add video to favourite list 
export const addToFavourit = (data) =>{
    return {
        type : ADD_TO_FAVOURITE,
        payload: data
    }
};

export const removeToFavourite = (data) =>{
    return{
        type: REMOVE_TO_FAVOURITE,
        payload: data
    }
}