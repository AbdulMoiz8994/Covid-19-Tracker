
// export const fetchData = async() => {
//    try{
//       const data = await fetch('https://api.covid19api.com/summary')
//       const json= await data.json()
//       console.log(json.Global)
//       console.log(json)
//    return (
//      json.Global
//      )
//    }catch(error){
//     return error
//    }


// }
const url ="https://covid19.mathdro.id/api"
export const date= async() =>{
   try{
     const {data}= await fetch(`${url}/daily`)
   //   const jsons= await date.json()
     console.log(data)
     const modifyState=data && data.map((Dates) =>({
      confirmed: Dates.confirmed.total,
      deaths: Dates.deaths.total,  
      reportDate: Dates.reportDate
     })
     )
     return modifyState()
   }catch(error){

   }
}




