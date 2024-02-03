import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { COMMENTS_FAIL_OF_SELECTED_VIDEO, COMMENTS_REQUEST_OF_SELECTED_VIDEO, COMMENTS_SUCCESS_OF_SELECTED_VIDEO, CREATE_COMMENT_FAIL_OF_SELECTED_VIDEO, CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO, CREATE_COMMENT_SUCCESS_OF_SELECTED_VIDEO, GET_COMMENTS_OF_SELECTED_VIDEO } from "../constants/constants";


//===================== get all comments for selected video section =====================
async function getApiData(videoId) {
    const res = await apiRequest('/commentThreads', {
        params: {
            part: 'snippet',
            videoId
        } 
    })
    return res;
}
function* fetchVideoCommentsByVideoId(action) {
    try {
        yield put({ type: COMMENTS_REQUEST_OF_SELECTED_VIDEO, payload: true })
        const {data} = yield call(getApiData, action.payload);
        yield put({ type: COMMENTS_SUCCESS_OF_SELECTED_VIDEO, payload: data.items});
    } catch (error) {
      yield  put({ type: COMMENTS_FAIL_OF_SELECTED_VIDEO, payload: 'error msg' });
    }

}
function* getCommentsOfSelectedVideoSaga() {
    yield takeLatest(GET_COMMENTS_OF_SELECTED_VIDEO, fetchVideoCommentsByVideoId)
};




//===================== get all comments for selected video section =====================




//===================== post comment for selected video section =====================

// worker saga for add comment

async function postApiData(postBy){
    const { videoId, commentText, accessToken } = postBy;
    try {
        const dataToSend = {
            snippet: {
                videoId: videoId,
                topLevelComment:{
                    snippet: {
                        textOriginal: commentText
                    }
                }
            }
        }
        const res = await apiRequest.post('/commentThreads', dataToSend, {
            params : {
                part: 'snippet',
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
       
        return res;
    } catch (error) {
        console.log("Error on Post Api", error)
    }
}

function* postCommentsOfSelectedVide(action){
   
   try {
       const {data} = yield call(postApiData, action.payload);

       // if comment is successfully added the re-fetch the comments list
       yield put({ type: CREATE_COMMENT_SUCCESS_OF_SELECTED_VIDEO, payload: data?.snippet?.videoId })
    //    yield call(fetchVideoCommentsByVideoId,  'data?.snippet?.videoId')
    //    yield put({ type: GET_COMMENTS_OF_SELECTED_VIDEO, payload: data?.snippet?.videoId })

   } catch (error) {
       console.log("Error on Post worker saga", error)
       yield put({ type: CREATE_COMMENT_FAIL_OF_SELECTED_VIDEO, payload: error })
   }
}

function* addCommentsOfSelectedVideoSaga(){
    yield takeLatest(CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO, postCommentsOfSelectedVide)
}

export { getCommentsOfSelectedVideoSaga, addCommentsOfSelectedVideoSaga };
// export { addCommentsOfSelectedVideoSaga };
//===================== post comment for selected video section =====================



