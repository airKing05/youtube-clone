import { SUBSCRIPTIONS_FAIL, SUBSCRIPTIONS_REQUEST, SUBSCRIPTIONS_SUCCESS,  } from "../constants/constants";

const initialSate = {
    subscriptionsOfAuthUser: [],
    loading: false,
    error: ''
};
export const subscriptionsOfAuthUserReducer = (state = initialSate, action) => {
    switch (action.type) {
        case SUBSCRIPTIONS_REQUEST:
            return { ...state, loading: true };
        case SUBSCRIPTIONS_SUCCESS:
            return { ...state, subscriptionsOfAuthUser: action.payload, loading: false };
        case SUBSCRIPTIONS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
