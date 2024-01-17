import React, { useState } from 'react';
import {UilThumbsUp, UilThumbsDown} from '@iconscout/react-unicons';
import moment from 'moment';
import { toggleShowMoreText } from '../../utils/methods/toggleShowMoreText';

function convertDateInToDays(dateString){
    const date = moment(dateString);
    const day = date.format('D'); 
    return day;
}

export default function SingleComment({ comment }) {
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay, likeCount } = comment?.snippet?.topLevelComment?.snippet;

    const [showMore, setShowMore] = useState(true);
    const isApplyShowMoreText = () => {
        const flag = String(textDisplay).split(/\r\n|\r|\n/).length >=4 ? true : false;
        // console.log("flagggggg", flag, textDisplay, String(textDisplay).split(/\r\n|\r|\n/).length, textDisplay.split('\n').length)
       return flag;
    }

  return (
      <div className='d-flex flex-column my-3'>
          <div className='row'>
              <div className='col-1 d-flex justify-content-end align-items-center p-1 '  >
                  <img
                      src={authorProfileImageUrl}
                      className='img-fluid rounded-circle'
                      style={{ width: '100%' }}
                      alt='icon'
                  />
              </div>
              <div className='col-11 d-flex flex-column'>
                 <div>
                      <span style={{ fontSize: '13px' }}>
                          {
                              authorDisplayName
                          }
                      </span> &nbsp;&nbsp;
                      <span className='text-muted' style={{ fontSize: '12px' }}>
                          {
                            convertDateInToDays(publishedAt)
                          } days ago
                      </span>
                 </div>

                  <div className='' style={{ fontSize: '11px' }}>
                      <div className='bg-transparent overflow-hidden'
                      >
                          <span className='bg-transparent' style={isApplyShowMoreText() ? toggleShowMoreText(showMore) : {}}>
                              {textDisplay}
                          </span>
                          {
                              isApplyShowMoreText() ? <span
                                  className='bg-transparent text-primary'
                                  onClick={() => setShowMore(!showMore)}>{showMore ? "...More" : "Show less"}
                              </span> : null
                          }
                         
                      </div>
                      <div className='px-0 d-flex align-items-center'>
                          <span className=''><UilThumbsUp size={15} color="#dee2e6" /></span>
                          <span className='fs-6'>
                              &nbsp;
                              {
                                  likeCount > 0 ? likeCount : null
                              }
                          </span>
                          &nbsp;
                          <span className='px-1'><UilThumbsDown size={15} color="#dee2e6" /></span>
                      </div>
                  </div>
              </div>
          </div>
         
      </div>
  )
}
