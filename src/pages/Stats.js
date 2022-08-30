import React, {useState} from 'react';
import { useSelector } from "react-redux";

const videoInfo = {
  totalVideo: 0,
  totalLikesOfAllVideo: 0,
  totalViewsOfAllVideo: 0,
}
   
export default function Stats() {
  const [channelData, setChannelData] = useState([]);
  const [favData, setFavData] = useState(videoInfo);

  // get channel data from the search channel
  const channelInfo = useSelector((state) => state.channelData);
  // console.log("channelInfo", channelInfo)
  if (channelData !== channelInfo) {
    setChannelData(channelInfo)
  }
  //console.log("channelDatasbkjsk", channelData[0].statistics)
  
  // get favourites data
  const favouriteVideosList = useSelector((state) => state.favouriteVideosList);

  //console.log("favouriteVideosList", favouriteVideosList)

  // favouriteVideosList && favouriteVideosList.reduce((acc, curr) =>{
       
  // }, {})


  function getTotalLikeCountByFavourites() {
    let likesCount = 0;
    for (let i = 0; i < favouriteVideosList.length; i++) {
      likesCount += parseInt(favouriteVideosList[i][0]['statistics'].likeCount);
    }
    return likesCount/1000;
  }

  function getAvgViewCountByFavourites() {
    const favouritesCount = favouriteVideosList.length;
    let viewsCount = 0;
    for (let i = 0; i < favouriteVideosList.length; i++) {
      viewsCount += parseInt(favouriteVideosList[i][0]['statistics'].viewCount);
    }
    return (Math.floor(viewsCount / favouritesCount))/1000;
  }




  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-md-5 border shadow-lg p-3 mb-5 bg-body rounded'>
          <h4>Basics</h4>
          <h6>Total number of searches</h6>
          <h6> Total followers:  {channelData[0] && channelData[0].statistics.subscriberCount/1000}k</h6>
          <h6>Total Video: {channelData[0] && channelData[0].statistics.videoCount}</h6>
        </div>
        <div className='col-2 d-none d-md-block'>
       
           </div>
        <div className='col-md-5 border shadow-lg p-3 mb-5 bg-body rounded'>
          <h4 className='mb-4'>Favourites data </h4>
          <h6> Total Videos in Favourite list: {favouriteVideosList.length}</h6>
          <h6> Total likes of Favourits List : {getTotalLikeCountByFavourites()} K</h6>
          <h6>Average Views of Favourits List : {getAvgViewCountByFavourites()} K</h6>
        </div>

      </div>
    </div>
  )
}
