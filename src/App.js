import React from 'react'
import './App.css';

//import components
import Header from './Components/Header.jsx' 
import GlobalGrid from './Components/GlobalGrid.jsx'
import {Heading} from './Components/Heading.jsx'
import ListCountries from './Components/ListCountries.jsx'
import BarCharts from './Components/BarChart.jsx'
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
      <ListCountries/>
      <br/>
      <BarCharts/>
    </div>
  );
}

export default App;
