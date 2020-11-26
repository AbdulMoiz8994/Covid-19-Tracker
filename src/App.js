import React from 'react'
import './App.css';

//import components
import Header from './Components/Header.jsx' 
import GlobalGrid from './Components/GlobalGrid.jsx'
import {Heading} from './Components/Heading.jsx'
import MenuButton from './Components/MenuButton.jsx'
function App() {
  return (
    <div>
      <Header/>
      <Heading/>
      <GlobalGrid/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MenuButton/>
    </div>
  );
}

export default App;
