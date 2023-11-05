
import { ACTION_TYPES } from './MainPage.constant';

export const loading=()=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.LOADER });
   }
   export const menubar=()=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.MENUBAR });
   }