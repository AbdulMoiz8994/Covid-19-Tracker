import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = useState([]);
    console.log(setAnchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event)
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Countries
      </Button>
      {anchorEl.map((values,index) =>{
          // console.log(values)
          return(
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        // onClose={handleClose}
        key={index}
      >
        <MenuItem>{values.Country}</MenuItem>
      </Menu>
      )
      })}
      
    </div>
  );
}
