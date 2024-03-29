

import { CHANNEL_DETAILS_FAIL_OF_SELECTED_VIDEO, CHANNEL_DETAILS_REQUEST_OF_SELECTED_VIDEO, CHANNEL_DETAILS_SUCCESS_OF_SELECTED_VIDEO } from "../constants/constants";

const initialSate = {
    channelDetails: null,
    loading: false,
    error: ''
};
export const channelDetailsByChannelId = (state = initialSate, action) => {
    switch (action.type) {
        case CHANNEL_DETAILS_REQUEST_OF_SELECTED_VIDEO:
            return { ...state, loading: true };
        case CHANNEL_DETAILS_SUCCESS_OF_SELECTED_VIDEO:
            return { ...state, channelDetails: {...state.comments, ...action.payload}, loading: false };
        case CHANNEL_DETAILS_FAIL_OF_SELECTED_VIDEO:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
