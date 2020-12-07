// import { Update } from '@material-ui/icons';
import React,{useEffect,useState} from 'react'
// import { BarChart } from '@material-ui/icons';
import {Line} from 'react-chartjs-2';
// import {fetchData} from '../Api.jsx'
import {date} from '../Api.jsx'

function BarCharts() {
    const [Datas, gData]=useState([{}])
    console.log(Datas)

// const[Dates, Udate]=useState([{date}])


 useEffect(() =>{
  const fetchDailyData= async() =>{
    gData([ await date()])
  }
  fetchDailyData()
 },[])   



// useEffect(() => {
//   const fetchDailyData= async() =>{
//     Udate(await date())
//   }
//   console.log(Dates)
//   fetchDailyData()
// },[])



const lineData = (
  // Dates.length?(
  <Line
  data={{
  labels:  Datas.map((reportDate) => reportDate),
  datasets: [
    {
      data:  Datas.map((confirmed) =>  confirmed),
      label: "Infected",
      borderColor: 'blue',
      backgroundColor: 'rgba(255, 196, 0, 0.5)',
      fill: true
    },
    {
      data: Datas.map((deaths) => deaths),
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