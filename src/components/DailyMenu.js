import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/*
function DailyMenu(props) {
    return (
        <div>
            <h1>{props.day}</h1>
        </div>
    )
}

export default DailyMenu;


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
*/

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function MediaCard(props) {
  const classes = useStyles();
  const [menu, setMenu] = useState(props);

  console.log(props.menu)
  console.log(props.menu[props.index])

  return (
    <Card className={classes.root}>

      <CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.day}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={props.menu[props.index]}
          title="mon repas"
        />

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mdifier
        </Button>
        <Button size="small" color="primary">
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
}