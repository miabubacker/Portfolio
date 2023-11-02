import MainPagereducer from '../Components/MainPage/MainPage.reducer';
import { combineReducers } from 'redux';
export const defaultReducers = {
  MainPagereducer,
  
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
