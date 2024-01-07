import videoDataSaga from "./videosSaga";
import mostPopulareVideoSaga from "./mostPopulareVideosSaga";
import { all, fork } from "redux-saga/effects";
import selectedVideoByIdSaga from "./selectedVideoByIdSaga";
import videoCommentsSaga from "./videoCommnetsSaga";
import relatedVideosSaga from "./relatedVideosSaga";
import channelDetailsSaga from "./channelDetailsByChannelId";


export default function* storeSaga(){
    yield all([
        // fork(videoDataSaga),
        fork(mostPopulareVideoSaga),
        fork(selectedVideoByIdSaga),
        fork(videoCommentsSaga),
        fork(relatedVideosSaga),
        fork(channelDetailsSaga),
    ])
}