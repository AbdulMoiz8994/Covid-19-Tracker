import React,{useEffect,useState} from 'react'
// import { BarChart } from '@material-ui/icons';
import {Bar,Line} from 'react-chartjs-2';




function BarCharts() {
    const [Data, gData]=useState([{}])
    console.log(Data)

    useEffect(() =>{
        async function fetchData() {
            const response= await fetch('https://api.covid19api.com/summary')
            const json= await response.json()
            gData(json.Countries)
            console.log(json.Countries)
        }
        fetchData()
    },[])
    



const data = {
  labels: ['Infected','Recovered','Deaths'],
  datasets: [
    {
      label: 'People',
      backgroundColor: [
    'rgba(65,105,225,0.2)',
      "rgba(0, 255, 0, 0.5)",
       "rgba(255, 0, 0, 0.5)",
    ],
      borderColor: 'rgba(65,105,225,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(65,105,225,0.4)',
      hoverBorderColor: 'rgba(65,105,225,1)',
      data: []
    }
  ]
};

   


    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={'50%'}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
export default BarCharts;