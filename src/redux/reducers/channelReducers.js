import { SET_CHANNEL_DATA } from "../constants/constants";
let initialState = [{}];

export const channelData = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANNEL_DATA: return [...action.payload.items];
        default: return state;
    }
}