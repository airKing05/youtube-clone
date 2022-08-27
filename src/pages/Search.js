import React from 'react';
import { UilSearch } from '@iconscout/react-unicons'

export default function Search() {
  return (
    <div className='container border' style={{maxWidth:"1000px"}}>
      <div class="input-group my-5 d-flex mx-auto" style={{ maxWidth: "500px" }}>
        <input type="text" class="form-control" placeholder="search by username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span class="input-group-text" id="basic-addon2"><UilSearch/></span>
      </div>
    </div>
  )
}
