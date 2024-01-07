import React from 'react';
import {UilThumbsUp, UilThumbsDown} from '@iconscout/react-unicons';
import moment from 'moment';

function convertDateInToDays(dateString){
    const date = moment(dateString);
    const day = date.format('D'); 
    return day;
}

export default function SingleComment({ comment }) {
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay, likeCount } = comment?.snippet?.topLevelComment?.snippet;

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
                      <div>
                          {
                              textDisplay
                          }
                          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio temporibus similique commodi reiciendis. Atque, deleniti fugit! Assumenda necessitatibus dolor id cumque, culpa numquam laborum. */}
                      </div>
                      <div className='px-0'>
                          <span className=''><UilThumbsUp size={15} color="#dee2e6" /></span>
                          <span className='fs-5'>
                              &nbsp;
                              {
                                  likeCount > 0 ? likeCount : null
                              }
                          </span>
                          <span className='px-1'><UilThumbsDown size={15} color="#dee2e6" /></span>
                      </div>
                  </div>
              </div>
          </div>
         
      </div>
  )
}
