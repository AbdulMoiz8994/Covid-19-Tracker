import React,{useEffect,useState} from 'react'
// import { BarChart } from '@material-ui/icons';
import {Line} from 'react-chartjs-2';



function BarCharts() {
    const [Data, gData]=useState([])
    console.log(Data)

    

const lineData = (
  <Line
  data={{
  labels:  Data.map(({date}) => date),
  datasets: [
    {
      data: Data.map(({confirmed}) => confirmed),
      label: "Infected",
      borderColor: 'blue',
      fill: true
    },
    {
      data: Data.map(({deaths}) => deaths),
      label: "Deaths",
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0, 0.5)',
      fill: true,

    }]
  }}
  />
);

   


    return (
      <div>
        <h2>Bar Example (custom size)</h2>
       {lineData}
      </div>
    );
  }
export default BarCharts;









// useEffect(() =>{
    //     async function fetchData() {
    //         const response= await fetch('https://covid19.mathdro.id/api/daily')
    //         // console.log(response)
    //         const json= await response.json()
    //         // gData(json)
    //         console.log(json)
    //         const modifyData=({
    //         confirmed: json.confirmed, 
    //         deaths: json.deaths,
    //         date: json.reportDate,
    //         })
    //         console.log()

    //       return modifyData

    //     }
    //     fetchData()
    // },[])
    // const fecthData= async()=>{
    //   try {
    //     const data= await fetch('https://covid19.mathdro.id/api/daily')
    //     const json= await data.json()
    //     console.log(json)
    //     gData(json)
    //     const modifyData=({
    //       confirmed: data && data.confirmed,
    //       // recovered: data.recovered,
    //       deaths: data && data.deaths,
    //       lastUpdate: data && data.lastUpdate,
    //     });
    //     return modifyData;
    //   } catch (error) {
        
    //   }
    // }
    // // fecthData();
    // useEffect(() =>{
    //   const fetMyApI = async () =>{ 
    //   const fetch= await fecthData()
    //   // console.log(fecthData)
    //    gData(fetch)
    // }
    // fetMyApI()
    //  },[])






// label: 'People',
//       backgroundColor: [
//     'rgba(65,105,225,0.2)',
//       "rgba(0, 255, 0, 0.5)",
//        "rgba(255, 0, 0, 0.5)",
//     ],
//       borderColor: 'rgba(65,105,225,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(65,105,225,0.4)',
//       hoverBorderColor: 'rgba(65,105,225,1)',
//       data: []