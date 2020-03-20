import { takeLatest, put, call } from 'redux-saga/effects';
import { get, post } from '../../api/api';
import { 
  RISK_GET_GAME_REQUESTED, 
  RISK_GET_GAME_SUCCESS,
  RISK_GET_GAME_FAILED, 
  RISK_CREATE_GAME_REQUESTED, 
  RISK_CREATE_GAME_SUCCESS, 
  RISK_CREATE_GAME_FAILED,
  RISK_PICK_GAME_REQUESTED, 
  RISK_PICK_GAME_SUCCESS,
  RISK_PICK_GAME_FAILED} from '../action/riskAction';

const getF = function*(action) {
    const data = yield call(get, `https://game-board-back-flooven.herokuapp.com/risk/${action.payload.uuid}`);
    
    if(data) {
      yield put({ type: RISK_GET_GAME_SUCCESS, payload: { data: data }});
    } else {
      yield put({ type: RISK_GET_GAME_FAILED });
    }
};

const postF = function*(action) {
    const data = yield call(post, `https://game-board-back-flooven.herokuapp.com/risk/${action.payload.nbPlayer}`);

    if(data) {
      yield put({type: RISK_GET_GAME_SUCCESS, payload: { data: data }});
    } else {
      yield put({type: RISK_GET_GAME_FAILED });
    }
};

const getPick = function*(action) {
    const data = yield call(get, `https://game-board-back-flooven.herokuapp.com/risk/${action.payload.uuid}/pick`);
  
    if(data) {
      yield put({type: RISK_PICK_GAME_SUCCESS, payload: { card: data }});
    } else {
      yield put({type: RISK_PICK_GAME_FAILED});
    }
};

// --- watcher
const watchRiskRequestsGen = function*() {
  yield takeLatest(RISK_GET_GAME_REQUESTED, getF);
  yield takeLatest(RISK_CREATE_GAME_REQUESTED, postF);
  yield takeLatest(RISK_PICK_GAME_REQUESTED, getPick);
};

export const watchRiskRequests = watchRiskRequestsGen;