import React from 'react';
import { UilHeartAlt} from '@iconscout/react-unicons';


export default function FavIcon() {
  return (
    <span className='btn border-none p-0 '  onClick={()=> {alert('fav video added')}}><UilHeartAlt color="#fff" size ={25}/></span>
  )
}
