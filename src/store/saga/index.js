import { all } from 'redux-saga/effects';
import { watchGenericRequests } from './genericRequest';

const root = function*() {
    yield all([
        watchGenericRequests()
    ]);
};

export default root;