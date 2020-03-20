import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import { RISK_GET_GAME_REQUESTED, RISK_PICK_GAME_REQUESTED, RISK_CREATE_GAME_REQUESTED } from '../store/action/riskAction';
import Card from './Card';
import { Button, Container } from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Risk = (props) => {
    const [nbPlayer, setNbPlayer] = useState(2);

    const [loading, setLoading] = useState(false);
    const searchGame = (uuid) => {
        props.history.push(`?${setParams(uuid)}`);
        props.searchGame(uuid);
    };

    const createGame = () => {
        props.createGame(nbPlayer);
    };
 
    const setParams = (param) => {
        const searchParams = new URLSearchParams();
        searchParams.set("uuid", param);
        return searchParams.toString();
    };

    const getParams = () => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get("uuid") || '';
    };

    const getGameLink = () => {
        return window.location.toString();
    };

    const pickNewCard = () => {
        props.pickCard(props.gameBoard.uuid);
    }
    
    if(!props.gameBoard && getParams() && !loading) {
        searchGame(getParams());
        setLoading(true);
    } else if(props.gameBoard && !getParams()) {
        props.history.push(`?${setParams(props.gameBoard.uuid)}`);
    }
    

    return (
        <div>
            <PrimarySearchAppBar plusEnable={!props.gameBoard} oncreate={createGame} onblur={(e) => searchGame(e.target.value)}/>
            { props.gameBoard && 
            (
                <>
                    <CopyToClipboard text={getGameLink()} >
                        <span>Clicker pour copier le lien de la partie</span>
                    </CopyToClipboard>
                    <Container maxWidth="sm">
                        <Card name={props.actualCard.name} detail={props.actualCard.detail} img={props.actualCard.image} />
                        <Button variant="contained" color="primary" onClick={pickNewCard}>Pick new card</Button>
                    </Container>
                </>
            )
            }
        </div>
    );
}

export default connect(
  store => ({
      gameBoard: store.riskReducer.gameBoard,
      actualCard: store.riskReducer.actualCard
  }),
  dispatch => ({
    searchGame: (uuid) =>
    dispatch({
        type: RISK_GET_GAME_REQUESTED,
        payload: {
          uuid
        }
    }),
    pickCard: (uuid) =>
    dispatch({
        type: RISK_PICK_GAME_REQUESTED,
        payload: {
          uuid
        }
    }),
    createGame: (nbPlayer) =>
    dispatch({
        type: RISK_CREATE_GAME_REQUESTED,
        payload: {
          nbPlayer
        }
    })
  })
)(Risk);
