import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "./MainPage.constant";
import { produce } from "immer";

const initialState = {
  loading: false,
  dashboard:[],
   home:[],
   about:[],
   project:[],
   headers:['_hello','_about-me','_projects']
};

export default handleActions(
  {
    [ACTION_TYPES.LOADER]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),


  },
  initialState
);
