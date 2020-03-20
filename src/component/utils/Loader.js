import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    center: {
        display: "flex",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        justifyContent: 'center',
        alignItems: 'center',
    },
    vcenter: {
        margin: 'auto',
        textAlign: 'center',
    }
  }));

const Loader = (props) => {
    const classes = useStyles();

    let size = 35;
    let classe = {}

    if(props.variant === 'middle') {
        size = 100;
        classe = classes.center;
    } else if(props.variant === 'vmiddle') {
        classe = classes.vcenter;
    }

    return (
        <div className={classe} >
            <CircularProgress size={size} />
        </div>
    );
}

export default Loader;