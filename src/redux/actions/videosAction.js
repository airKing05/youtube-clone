import { VIDEOS_LIST, SEARCH_CHANNEL} from "../constants/constants";


export const  videosList = () =>{
     return { 
        type: VIDEOS_LIST,
        //payload: data
     }
}

export const searchChannel = (query) =>{
    return {
        type: SEARCH_CHANNEL,
        payload: query
    }
}