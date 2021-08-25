import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import commonUtils from '../../utils/commonUtils'
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:70,
    backgroundColor: '#2f2f2d',
    cursor:'pointer',
    transition: 'all .2s ease-in-out',

    '&:hover': {
      background: "#3e3e3a",
      transform: 'scale(1.1)',

   },
   textEmphasisColor:'white'
  },
  content: {
    flex: '1 0 auto',
    width:'90px',
    color:'white'
    
  },
  cover: {
    width: 150,
    height:150,
  },
  title: {
    fontSize: '1.3rem',
    lineHeight: '1.2'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: 'white'
  },
  TitleTextColor: {
    color:'white'
  },
  subTextColor: {
    color:'#afafaf'
  }
  
}));

function SpotifyCard(props) {
  const classes = useStyles();

  return (
<Grid className={classes.root}item xs={12}>
  <Link style={{ textDecoration: 'none' }} href={props.item.url}>
  <Grid item>
    <img className={classes.cover} src={props.item.img}/>
  </Grid>
    <Grid>
    <Typography className={classes.title} component="h5" className={classes.TitleTextColor} variant="h5">
              {props.item.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTextColor}>
              {props.item.artists}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTextColor}>
              {props.item.time}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTextColor}>
              {props.item.type}
            </Typography>
    </Grid>
    </Link>
  </Grid>

  );
}

export default SpotifyCard;
