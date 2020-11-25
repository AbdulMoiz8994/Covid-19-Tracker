import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '99%',
    marginTop: '30px',
    
  },
  paper: {
    marginTop: '20px',
    padding: theme.spacing(2),
    margin: '10px 10px 5px 16px',
    borderBottom:' 10px solid grey',
   backgroundColor: 'deepskyblue',
  },
  h3:{
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    
  },
  text:{
    fontWeight:'lighter',
  },
  h2:{
    fontSize: '40px',
  }
}));

export default function GlobalGrid() {
  const classes = useStyles();
  const [getDATA, updateData] = useState({})
  useEffect(() => {
    async function get_Data() {
      const response = await fetch("https://api.covid19api.com/summary")
      const data = await response.json()
      //  delete.
      updateData(data.Global)
      console.log(data.Global)

    }
    get_Data()
  }, [])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(getDATA).map((key,ind) => {
          return (
            <Grid  item xs={12} sm={12}>
              <Paper key={ind} className={classes.paper} >
                <h3 className={classes.h3}>{key.replace(/_/g,' ')}</h3>
          <h2 className={classes.h2}>{getDATA[key]}</h2>
            <h3 className={classes.text}>Number of Total Cases Covid-19</h3>
              </Paper>
            </Grid>
          )

        })}

      </Grid>
    </div>
  );
}
