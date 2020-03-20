import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MDCard } from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Card(props) {
  const classes = useStyles();

  return (
    <MDCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image card"
          height="140"
          image={props.img}
          title="Image card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MDCard>
  );
}