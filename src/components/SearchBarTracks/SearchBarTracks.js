import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import { SearchTracks } from '../../api/spotifyService';
import { useDispatch,useSelector } from 'react-redux';
import commonUtils from '../../utils/commonUtils';
import SetItems from '../../actions/setItems';
import setNextQuery from '../../actions/setNextQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchBar: {
    marginBottom: 40,
    borderRadius:'50px'
  },

}));

function SearchBarTracks() {
    const [input, setInput] = useState("");
    const filterType = useSelector((state) => state.spotifyReducer.filterType);
    const spotifyItems = useSelector((state) => state.spotifyReducer.spotifyItems);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
      if(input.length > 2) {
        getTracks();
      } else {
        if(input.length === 0) {
          dispatch(SetItems([])); 
          dispatch(setNextQuery(''));

        }
      }
    },[input, filterType]);

    async function getTracks(){
        let tracksResults = await SearchTracks(input, filterType);
        if(tracksResults) {
          let _spotifyItems =  commonUtils.setItems(tracksResults.items, filterType);

          dispatch(setNextQuery(tracksResults.next));
          dispatch(SetItems(_spotifyItems));
        } else {
          dispatch(SetItems([])); 
        }
    }

    return (
      <SearchBar
        className={classes.searchBar}
        placeholder="Search for Tracks/Albums"
        value={input.value}
        onChange={(newValue) => setInput( newValue )}
      />
    );
}
export default SearchBarTracks;
