import { SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL } from "../constants/constants";

const initialSate = {
    video: {},
    loading: false,
    error: ''
};
export const selectedVideoByVideoId = (state = initialSate, action) => {
    switch (action.type) {
        case SELECTED_VIDEO_REQUEST:
            return { ...state, loading: true };
        case SELECTED_VIDEO_SUCCESS:
            return { ...state, video: { ...state.video, ...action.payload}, loading: false };
        case SELECTED_VIDEO_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
