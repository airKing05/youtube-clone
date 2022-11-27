import React from 'react';
import { UilHeartAlt} from '@iconscout/react-unicons';


export default function FavIcon(props) {
  //console.log(props)
  return (
    <span 
    className='btn border-none p-0' 
      style={{ background: `${props.bgColor}`}} 
    onClick={props.clickHandler}
    ><UilHeartAlt color="#fff" size ={25}/></span>
  )
}
