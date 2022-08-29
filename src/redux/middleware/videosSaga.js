import { SEARCH_CHANNEL, SET_VIDEOS_LIST, SET_CHANNEL_DATA, SET_VIDEO_STATICS } from "../constants/constants";
import { takeEvery, put } from "redux-saga/effects";

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
let resSearch = '';


function* searchChannel(searchInput){

    // getting the search video data
    const type = "video";
    const partSearch = "snippet";
    let query = encodeURI(searchInput.payload).toLowerCase();
    let searchDataApiUrl = BASE_URL + "/search" + "?key=" + 'AIzaSyAvudCPRsAqikw6eTPHaPAi7fm29 - aig - 8' + "&q=" + query + "&type=" + type + "&part=" + partSearch
    console.log("URL ___________", searchDataApiUrl);
    let searchResult = yield fetch(searchDataApiUrl);
    searchResult = yield searchResult.json();
   // yield put({ type: 'SET_CHANNEL_ID', payload: { id: searchResult.items[0].snippet.channelId } })    
    yield put({ type: SET_VIDEOS_LIST, payload: searchResult.items })

    // get channel data 
    const channelId = searchResult.items[0].snippet.channelId;
    const partChannel = "snippet,contentDetails,statistics";
    const channelDataApiUrl = BASE_URL + "/channels" + "?key=" + KEY + "&part=" + partChannel + "&id=" + channelId;
    let channelDataApiResult = yield fetch(channelDataApiUrl);
    channelDataApiResult = yield channelDataApiResult.json();
    // console.log('channel data');
    // console.log(channelDataApiResult);
    // console.log('channel data');
    yield put({ type: SET_CHANNEL_DATA, payload: channelDataApiResult })
}


function* videoDataSaga(){
    yield takeEvery(SEARCH_CHANNEL, searchChannel)
}

export default videoDataSaga;