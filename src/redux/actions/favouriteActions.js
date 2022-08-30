import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constants/constants";

// add video to favourite list 
export const addToFavourite = ({...data}) =>{
    return {
        type : ADD_TO_FAVOURITE,
        payload: data
    }
};

export const removeToFavourite = (data) =>{
    return{
        type: REMOVE_FROM_FAVOURITE,
        payload: data
    }
}