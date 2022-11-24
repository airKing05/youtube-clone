import { SET_SIDEBAR_SHOW } from '../constants/constants';

const initialSate = {
    sidebarShow: true
}

export const genralReducer = ( state = initialSate, action) =>{
    console.log("actuion, reducer", action)
   switch(action.type){
       case SET_SIDEBAR_SHOW: { 
         return{
             ...state, navbarShow: !state.sidebarShow
         };
    }
    default: 
    return state;
   }
}