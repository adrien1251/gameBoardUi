import { combineReducers } from 'redux';
import genericReducer from './genericReducer';
import { RESET_APP } from '../action/indexAction';

const reducers = combineReducers({
  genericReducer,
})

export default (state, action) => {
  return reducers(state, action);
}
