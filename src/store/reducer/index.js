import { combineReducers } from 'redux';
import riskReducer from './riskReducer';

const reducers = combineReducers({
  riskReducer,
})

export default (state, action) => {
  return reducers(state, action);
}
