import {  HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../constants/constants';


const initialState = {
    videos: [],
    loading: false,
    error: null
}

export default function mostPopularVideos(state = initialState, action) {
    switch (action.type) {
        case HOME_VIDEOS_REQUEST:
            console.log("reducer", action)
            return {
                ...state, loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state, loading: false, videos: action.videos
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state, loading: false, error: action.message
            }
        default:
            return state;
    }
}