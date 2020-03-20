// @flow

import { RISK_GET_GAME_SUCCESS, RISK_GET_GAME_FAILED, RISK_PICK_GAME_SUCCESS, RISK_PICK_GAME_FAILED } from "../action/riskAction";

const initialState = {
    gameBoard: null,
    actualCard: null,
    error: null,
};

export default function riskReducer(state = initialState, action) {
    switch (action.type) {
        case RISK_GET_GAME_SUCCESS: 
            return {...state, gameBoard: action.payload.data, actualCard: action.payload.data.deck[action.payload.data.actualCardIndex]};
        case RISK_GET_GAME_FAILED:
            return {...state, error: 'Une erreur est survenu'}
        case RISK_PICK_GAME_SUCCESS:
            return {...state, actualCard: action.payload.card}
        case RISK_PICK_GAME_FAILED:
            return {...state, error: 'Une erreur est survenu lors de la pioche, peut être le paquet est vide'}
        default:
        break;
    }

    return state;
}
