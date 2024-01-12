import { SEARCH_VIDEOS_FAIL, SEARCH_VIDEOS_REQUEST, SEARCH_VIDEOS_SUCCESS } from "../constants/constants";

const initialSate = {
    result: [],
    loading: false,
    error: ''
};
export const searchVideos = (state = initialSate, action) => {
    switch (action.type) {
        case SEARCH_VIDEOS_REQUEST:
            return { ...state, loading: true };
        case SEARCH_VIDEOS_SUCCESS:
            return { ...state, result: [...action.payload], loading: false };
        case SEARCH_VIDEOS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
