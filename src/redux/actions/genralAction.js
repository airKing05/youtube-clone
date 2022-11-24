import { SET_SIDEBAR_SHOW } from "../constants/constants";

export const genralAction = (query) => {
    console.log("qsks", query)
    return {
        type: SET_SIDEBAR_SHOW,
        payload: query
    }
}