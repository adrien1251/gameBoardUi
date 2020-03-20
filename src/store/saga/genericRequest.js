import { takeLatest, put, call } from 'redux-saga/effects';
import { get, post } from '../../api/api';
import { GENERICS_GET_REQUEST_CALL, GENERICS_POST_REQUEST_CALL, GENERICS_REQUEST_FAILED, GENERICS_REQUEST_SUCCESS } from '../action/genericAction';

const getF = function*(action) {
    const data = yield call(get, true, action.payload.url);

    if(data.statusCode < 400) {
      yield put({type: GENERICS_REQUEST_SUCCESS, payload: { data: data, stepId: action.payload.stepId }});
    } else {
      yield put({type: GENERICS_REQUEST_FAILED, payload: { error_message: data, stepId: action.payload.stepId }});
    }
};

const postF = function*(action) {
    try {
      const data = yield call(post, true, action.payload.url, action.payload.body, false);
      
      if(data.success) {
        yield put({type: GENERICS_REQUEST_SUCCESS, payload: { data: data.data, stepId: action.payload.stepId }});
      } else {
        yield put({type: GENERICS_REQUEST_FAILED, payload: { data: data, stepId: action.payload.stepId }});
      }
    } catch(e) {
      yield put({type: GENERICS_REQUEST_FAILED, payload: { data: e, stepId: action.payload.stepId }});
    }
};

// --- watcher
const watchGenericRequestsGen = function*() {
  yield takeLatest(GENERICS_GET_REQUEST_CALL, getF);
  yield takeLatest(GENERICS_POST_REQUEST_CALL, postF);
};

export const watchGenericRequests = watchGenericRequestsGen;