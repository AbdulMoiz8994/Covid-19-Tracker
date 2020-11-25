import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
    //   width: '100%',
    //   maxWidth: 500,
    margin: '40px 30px 40px 30px',
    },
    h:{
       color: 'red',
       fontWeight: 'bolder',
    },
  });
export const Heading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
        Cases Of <span className={classes.h}> Covid-19</span> In World!
      </Typography>
        </div>
    )
}
