
import { LOAD_USER_DATA, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST } from "../constants/constants";

const initialSate = {
    user: sessionStorage.getItem('accessToken') ? JSON.parse(sessionStorage.getItem('userData')) : null,
    accessToken: sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : null,
    loading: false,
    error: ''
};
export const authReducer = (state = initialSate, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, accessToken: action.payload.token, user: action.payload.user, loading: false };
        // case LOAD_USER_DATA:
        //     return { ...state, user: action.payload, loading: false };
        case LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload };

        case LOGOUT_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, accessToken: null, user: null, loading: false };
        case LOGOUT_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
