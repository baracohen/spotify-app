import React, { useEffect } from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import Cookies from 'js-cookie';
import Home from '../home/home'
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import SetToken  from '../../actions/setToken';


function Dashboard() {

    const token = useSelector((state) => state.spotifyReducer.token);
    const dispatch = useDispatch();

    useEffect( () => {
      const _token = Cookies.get('spotifyAuthToken');
      if(_token) {
        dispatch(SetToken(_token));
      }
    },[]);

  return (
    <Grid item>
      {token ? (
        <Home />
        ) : (
          <Grid container>
            <Grid item md={5} sm={4} xs={2}></Grid>
            <Grid item md={2} sm={4} xs={8}>
              <SpotifyAuth
                  redirectUri='http://localhost:3000/Home'
                  clientID='4d1d03000bac44cab88713bb8dd88493'
                  scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]} 
                  />
            </Grid>
            <Grid item md={5} sm={4} xs={2}></Grid>
          </Grid>
        
        )}
    </Grid>
    );
}
export default Dashboard;
