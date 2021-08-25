import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    active: {
      backgroundColor: '#1ed761',
      color:'black !important',

    },
    filterBtn: {
        cursor:'pointer',
        border:'1px solid #24e486',
        borderRadius:'70px',
        marginRight: '10px',
        color:'white',
        '&:hover': {
            background: "#6f6f68",
         },
    }
  }));
function FilterButton(props) {
    const classes = useStyles();

  return (
        <Button onClick={props.onClick} className={`${classes.filterBtn} ${props.isActive ? classes.active : ""}` } >{props.text}</Button>
    );
}
export default FilterButton;
