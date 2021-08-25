import spotifyReducer from './spotifyReducer';
import {combineReducers} from 'redux';

 const allReducers = combineReducers({
    spotifyReducer: spotifyReducer
})

export default allReducers