import React from 'react'
import AddCommet from './AddCommet'
import SingleCommet from './SingleCommet'

export default function Comments() {
  return (
    <div className='d-flex flex-column my-4 p-2'>
      <div>12 Comments</div>
       <AddCommet/>
       <SingleCommet/>
      <SingleCommet />

      <SingleCommet />

      <SingleCommet />

    </div>
  )
}
