import React from 'react'
import './App.css';

//import components
import Header from './Components/Header.jsx' 
import GlobalGrid from './Components/GlobalGrid.jsx'
import {Heading} from './Components/Heading.jsx'
function App() {
  return (
    <div>
      <Header/>
      <Heading/>
      <GlobalGrid/>
    </div>
  );
}

export default App;
