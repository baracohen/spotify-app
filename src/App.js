
import Logo from './images/comunix.png';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/home/home';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: 40,
  },

}));
function App() {
  const classes = useStyles();

  return (
      <Grid container direction="column" className="App">
        <Grid item  sm={1}></Grid>
        <Grid item container>
          <Grid item  sm={1} >
          </Grid>
          <Grid item xs={12} sm={10}>
              <img className={"logo"} alt="app-logo" src={Logo} />
              <Typography className={classes.header} variant="h3">Spotify Search</Typography>
              <Router>
                <Switch>
                  <Route path="/" component={Dashboard} />
                  <Route path="/Home" component={Home} />
                </Switch>
              </Router>
          </Grid>
          <Grid item sm={1} />
        </Grid>
      </Grid>
  );
}

export default App;