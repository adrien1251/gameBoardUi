// @flow

import { GENERICS_REQUEST_SUCCESS, GENERICS_REQUEST_FAILED, GENERICS_POST_REQUEST_CALL } from "../action/genericAction";

const initialState = {
    allData: {},
    error: null
};

const fillGenericData = (state, payload, error) => {
    let allData = Object.assign({}, state.allData);
    allData[payload.stepId] = error ? {error: payload.data} : payload.data;
    return {...state, allData, loading: false, error};
};

export default function genericReducer(state = initialState, action) {
    switch (action.type) {
        case GENERICS_POST_REQUEST_CALL: 
            let allData = Object.assign({}, state.allData);
            allData[action.payload.stepId] && delete allData[action.payload.stepId];
            return {...state, allData, error: null};
        case GENERICS_REQUEST_SUCCESS:
            return fillGenericData(state, action.payload, false);
        case GENERICS_REQUEST_FAILED:  
            return fillGenericData(state, action.payload, true);
        default:
        break;
    }

    return state;
}
