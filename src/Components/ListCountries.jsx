import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    fontSize: '50px',
      width: '30%',
      background: 'transparent',
      marginBottom: '10% !important',
      margin: '10px 10px 10% 35%',
      
    // minWidth: 120,
  },
}));

export default function ListCountries({}) {
    const [anchorEl, setAnchorEl] = useState([]);
  const classes = useStyles();
  useEffect(() =>{
    async function getData(){
        const get= await fetch('https://api.covid19api.com/summary')
        const find= await get.json()
        setAnchorEl(find.Countries)
        console.log(find.Countries) 

    }
    getData()
},[])


  return (
    <div>
      <FormControl className={classes.formControl}>

        <Select native defaultValue="" id="grouped-native-select">
          <option value="">Global</option>
          {anchorEl.map((values,index) =>(
          <option key={index}>{values.Country}</option>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}
