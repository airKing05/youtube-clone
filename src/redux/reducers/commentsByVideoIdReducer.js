import { COMMENTS_FAIL_OF_SELECTED_VIDEO, COMMENTS_REQUEST_OF_SELECTED_VIDEO, COMMENTS_SUCCESS_OF_SELECTED_VIDEO, CREATE_COMMENT_FAIL_OF_SELECTED_VIDEO, CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO, CREATE_COMMENT_SUCCESS_OF_SELECTED_VIDEO } from "../constants/constants";

const initialSate = {
    comments: [],
    newAddedCommentVideoId : null,
    loading : false,
    error: ''
};
export const commentsByVideoId = (state = initialSate, action) => {
    switch (action.type) {
        case COMMENTS_REQUEST_OF_SELECTED_VIDEO:
            return { ...state, loading: true };
        case COMMENTS_SUCCESS_OF_SELECTED_VIDEO:
            return { ...state, comments: action.payload, loading : false};
        case COMMENTS_FAIL_OF_SELECTED_VIDEO:
            return { ...state, loading: false, error: action.payload };

        case CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO:
            return { ...state, loading: true };
        case CREATE_COMMENT_SUCCESS_OF_SELECTED_VIDEO:
            return { ...state, loading: false, newAddedCommentVideoId: action.payload };
        case CREATE_COMMENT_FAIL_OF_SELECTED_VIDEO:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
