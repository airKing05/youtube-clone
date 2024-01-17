

import { CATEGORY_VIDEOS_FAIL, CATEGORY_VIDEOS_REQUEST, CATEGORY_VIDEOS_SUCCESS} from "../constants/constants";

const initialSate = {
    videos: [],
    loading: false,
    error: ''
};
export const categoryVideo = (state = initialSate, action) => {
    switch (action.type) {
        case CATEGORY_VIDEOS_REQUEST:
            return { ...state, loading: true };
        case CATEGORY_VIDEOS_SUCCESS:
            return { ...state, videos: action.payload, loading: false };
        case CATEGORY_VIDEOS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
