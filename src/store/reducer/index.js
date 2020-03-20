import { combineReducers } from 'redux';
import genericReducer from './genericReducer';

const reducers = combineReducers({
  genericReducer,
})

export default (state, action) => {
  return reducers(state, action);
}
