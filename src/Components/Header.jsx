import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px 20px 30px 15px',
    boxShadow: '0px 0px 7px grey'
  },
  title: {
    flexGrow: 1,
    margin: '25px 20px 30px 20px',
  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          
            Covid-19 Tracker Application By Abdul Moiz
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}
