import { createReducer, createSetValueAction, setValueReducer } from "../../common/redux-helper";

// enum
export const Types = {
  SetValue: 'search/SetValue',
  FetchAutoComplete: 'search/FetchAutoComplete',
  FetchAllHistory: 'search/FetchAllHistory',
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchAutoComplete: keyword => ({ type: Types.FetchAutoComplete, keyword }),
  fetchAllHistory: () => ({ type: Types.FetchAllHistory /* 페이징 초기화=> [FETCH_PAGE]: 0 */ }),
};

const INITIAL_STATE = {
  keyword: '',
  autoCompletes: [],
  history: [],
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});
export default reducer;