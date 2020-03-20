import { all } from 'redux-saga/effects';
import { watchRiskRequests } from './riskRequest';

const root = function*() {
    yield all([
        watchRiskRequests()
    ]);
};

export default root;