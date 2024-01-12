import videoDataSaga from "./videosSaga";
import mostPopulareVideoSaga from "./mostPopulareVideosSaga";
import { all, fork } from "redux-saga/effects";
import videoCommentsSaga from "./videoCommnetsSaga";
import relatedVideosSaga from "./relatedVideosSaga";
import channelDetailsSaga from "./channelDetailsByChannelId";
import searchVideosSaga from "./searchVideosSaga";
import selectedVideoByVideoIdSaga from "./selectedVideoByIdSaga";
import channelVideosByChannelRelatedPlaylistUploadSaga from "./channelVideosByChannelRelatedPlaylistUploadSaga";


export default function* storeSaga(){
    yield all([
        // fork(videoDataSaga),
        fork(mostPopulareVideoSaga),
        fork(selectedVideoByVideoIdSaga),
        fork(videoCommentsSaga),
        fork(relatedVideosSaga),
        fork(channelDetailsSaga),
        fork(searchVideosSaga),
        fork(channelVideosByChannelRelatedPlaylistUploadSaga),
    ])
}