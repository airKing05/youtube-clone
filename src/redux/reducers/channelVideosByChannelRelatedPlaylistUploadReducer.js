import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAIL, SEARCH_VIDEOS_REQUEST, SEARCH_VIDEOS_SUCCESS } from "../constants/constants";

const initialSate = {
    videos: [],
    loading: false,
    error: ''
};
export const channelVideosByChannelRelatedPlaylistUpload = (state = initialSate, action) => {
    switch (action.type) {
        case CHANNEL_VIDEOS_REQUEST:
            return { ...state, loading: true };
        case CHANNEL_VIDEOS_SUCCESS:
            return { ...state, videos: action.payload, loading: false };
        case CHANNEL_VIDEOS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
