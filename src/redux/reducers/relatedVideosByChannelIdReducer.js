

import { RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO, RELATED_VIDEOS_REQUEST_OF_SELECTED_VIDEO, RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO } from "../constants/constants";

const initialSate = {
    relatedVideos: [],
    loading: false,
    error: ''
};
export const relatedVideosByChannelId = (state = initialSate, action) => {
    switch (action.type) {
        case RELATED_VIDEOS_REQUEST_OF_SELECTED_VIDEO:
            return { ...state, loading: true };
        case RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO:
            return { ...state, relatedVideos: action.payload, loading: false };
        case RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
