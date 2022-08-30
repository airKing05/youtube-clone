import { SET_CHANNEL_DATA } from "../constants/constants";
let initialState = localStorage.getItem('channel_data') != null ? JSON.parse(localStorage.getItem('channel_data')) : [{}];

export const channelData = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANNEL_DATA:
            localStorage.setItem('channel_data', JSON.stringify([...action.payload.items]));
            return [...action.payload.items];
        default: return state;
    }
}