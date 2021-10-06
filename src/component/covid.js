import React, {useEffect, useState} from 'react'

const Covid = () => {
    const[data, setData]=useState([]);
    const getCovidData= async() =>{
        try{
          const res = await fetch('https://api.covid19india.org/data.json');
          const data=await res.json()
          console.log(data.statewise[0]);
          setData(data.statewise[0]);
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(() => {

        getCovidData();

    }, []);
    
    return (
       <>
         <h1>
             COVID-19 TRACKER
         </h1>
        <div className="container_1">
            <div className="box" id="box-1">
                <p><span>OUR</span>COUNTRY</p>
                <p>INDIA</p>
            </div>
            <div className="box" id="box-2">
            <p><span>TOTAL</span>RECOVERED</p>
            <p>{data.recovered}</p>
                
            </div>
            <div className="box" id="box-3">
                <p><span>TOTAL</span>CONFIRMED</p>
                <p>{data.confirmed}</p>
            </div>

        </div>
        <div className="container_2">
            <div className="box" id="box-4">
                <p><span>TOTAL</span>DEATHs</p>
                <p>{data.deaths}</p>
               
            </div>
            <div className="box" id="box-5">
            <p><span>TOTAL</span>ACTIVE</p>
            <p>{data.active}</p>
            </div>
            <div className="box" id="box-6">
            <p><span>LAST</span>UPDATED</p>
            <p>{data.lastupdatedtime}</p>
            </div>

        </div>

         
         

       </> 
    )
}

export default Covid

