import React, { useState } from 'react';
import SearchBarTracks from '../SearchBarTracks/SearchBarTracks'
import SpotifyCard from '../spotifyCard/spotifyCard'
import FilterButton from '../filterButton/filterButton'
import { Grid, Button, Typography } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import consts from '../../utils/consts';
import setFilterType from '../../actions/setFilterType';
import SetItems from '../../actions/setItems';
import commonUtils from '../../utils/commonUtils';
import { LoadMore } from '../../api/spotifyService';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  buttonsWrapper: {
    display: 'flex',
    marginTop:30,
    color:'white'
  },
  loadMoreBtn: {
    color:'white',
    borderRadius:'50px',
    border:'1px solid #24e486',
    '&:hover': {
        background: "#6f6f68",
    },
  },
  buttonsSortWrapper: {
    display: 'flex',
    color:'white',
    float:'right'
  },
  buttonstext: {
    marginBottom:20
  }
}));

function Home() {
  const spotifyItems = useSelector((state) => state.spotifyReducer.spotifyItems);
  const filterType = useSelector((state) => state.spotifyReducer.filterType);
  const nextQuery = useSelector((state) => state.spotifyReducer.nextQuery);
  const [isFilterActive, setIsFilterActive] = useState(true);
  const [isNameSortActive, setIsNameSortActive] = useState(false);
  const [isTimeSortActive, setIsTimeSortActive] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  const filterOnClick=() => {
    dispatch(SetItems([])); 
    setIsFilterActive(!isFilterActive);
    dispatch(setFilterType(filterType == consts.FilterTypes.Album ? consts.FilterTypes.Track : consts.FilterTypes.Album))
  }
  const loadMore = async () => {
    let tracksResults = await LoadMore(nextQuery, filterType);
    let _spotifyItems =  commonUtils.setItems(tracksResults.items, filterType);
    let newItems = spotifyItems.concat(_spotifyItems);
    dispatch(SetItems(newItems));
  }

  const timeSortOnClick = () => {
    setIsNameSortActive(false);
    setIsTimeSortActive(true);
    commonUtils.sortByName(spotifyItems,'time')
  }
  const nameSortOnClick = () => {
    setIsNameSortActive(true);
    setIsTimeSortActive(false);
    commonUtils.sortByName(spotifyItems,'name')
  }


  return (
    <div className={classes.root}>
        <SearchBarTracks />
        {spotifyItems.length > 0 ?
        <Grid>
          <Grid container className={classes.buttonsWrapper}>
            <Grid className={classes.buttonstext} item md={2} sm={2} xs={12}>
              <Typography className={classes.buttonstext} >Filter by:</Typography>
              <FilterButton onClick={filterOnClick} isActive={isFilterActive} text={'Tracks'} />
              <FilterButton onClick={filterOnClick} isActive={!isFilterActive} text={'Albums'} />
            </Grid>
            <Grid item md={8} sm={8} xs={12}></Grid>
            <Grid className={classes.buttonstext} item md={2} sm={2} xs={12}>
              <Typography className={classes.buttonstext}>Sort by:</Typography>
              <FilterButton onClick={nameSortOnClick} isActive={isNameSortActive} text={'Name'} />
              <FilterButton onClick={timeSortOnClick} isActive={isTimeSortActive} text={'Time'} />
            </Grid>
          </Grid>
         
        
          <Grid container>
            {spotifyItems && spotifyItems.map((_item, i) => (
              <Grid container key={i} item  md={3} sm={6} xs={12} >
                    <SpotifyCard key={i} item={_item} />
              </Grid>
              ))
            }
            </Grid>
            {nextQuery &&
              <Button className={classes.loadMoreBtn} onClick={loadMore}>Load more</Button>
            }
        </Grid>
        :"No items"}
    </div>

    );
}
export default Home;
