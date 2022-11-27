import {  HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../constants/constants';


const initialState = {
    videos: [],
    nextPageToken: null,
    loading: false,
    error: null
}

export default function mostPopularVideos(state = initialState, action) {
    console.log("action in reducers", action)
    const {type, payload} = action;
    switch (type) {
        case HOME_VIDEOS_REQUEST:
            console.log("reducer", action)
            return {
                ...state, loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state, loading: false, videos: payload.items, nextPageToken: payload.nextPageToken
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state, loading: false, error: payload.message
            }
        default:
            return state;
    }
}