import { SEARCH_CHANNEL } from "../constants/constants";

export const searchChannel = (query) =>{
    return {
        type: SEARCH_CHANNEL,
        payload: query
    }
}