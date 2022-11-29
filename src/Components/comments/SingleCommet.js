import React from 'react';
import {UilThumbsUp, UilThumbsDown} from '@iconscout/react-unicons';


export default function SingleCommet() {
  return (
      <div className='d-flex flex-column my-3'>
          <div className='row'>
              <div className='col-1 d-flex justify-content-end align-items-center p-1 '  >
                  <img src="https://yt3.ggpht.com/ytc/AMLnZu-Jn0nVA90AGZbhKR3YGsrrDHWZpp5FhIcUFsbCBA=s48-c-k-c0x00ffffff-no-rj" alt="logo"
                      className='img-fluid rounded-circle'
                      style={{ width: '100%' }}
                  />
              </div>
              <div className='col-11 d-flex flex-row align-items-center'>
                  <sapn style={{ fontSize: '13px' }}>Anilraj meena</sapn> &nbsp;&nbsp;
                  <span className='text-muted' style={{fontSize: '12px'}}> 3 days ago</span>
              </div>
          </div>
          <div className='row'>
            <div className='col-1 py-0'></div>
              <div className='d-flex justify-content-start flex-column my-0 col-11' style={{ fontSize: '11px' }}>
                 <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio temporibus similique commodi reiciendis. Atque, deleniti fugit! Assumenda necessitatibus dolor id cumque, culpa numquam laborum.</span>
                  <span className='px-0'>
                      <span className=''><UilThumbsUp size={15} color="#dee2e6" /> </span>
                      <span className='px-1'><UilThumbsDown size={15} color="#dee2e6" /></span>
                  </span>
              </div>
          </div>
      </div>
  )
}
