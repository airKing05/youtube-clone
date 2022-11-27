// import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../constants/constants";
// import apiRequest from "../../api";




// export const getMostPopularVideos = () => async dispatch =>{
//     try {
//         console.log('callling most popular');
//         dispatch({
//             type: HOME_VIDEOS_REQUEST,
//         })
//       const res =  await apiRequest("/videos", {
//             params: {
//                 part: 'snippet,contnentDetails,statistics',
//                 chart: 'mostPopular',
//                 regionCode: "IN",
//                 maxResult: 20,
//                 pageToken: ''    // right now dont have pagetoken bcoz first query
//             }
//         })
//        console.log(res);
//     } catch (error) {
//         console.log("error", error)
//     }
// };