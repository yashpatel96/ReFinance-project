import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './IndexScroll.css';

const IndexScroll = () => {
  const [dat, setDat] = useState([])
/*
  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL + 'indices')
        .then (res =>
          setDat(res.data))
        .catch(err => 
            console.log(err))
}, []);
*/

  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL + 'indices')
        .then (res =>{
          setDat(res.data);
          //console.log(res.data);
        })
        .catch(err => 
            console.log(err))
  }, []);

  return (

    <div className="container scroll-snap">
      {Object.keys(dat).map((key) => { return(
        <div className="child-container" key={key} onClick={() =>{
          console.log("Fixing");
          //const link = `https://api.twelvedata.com/quote?symbol=${value.symbol}&apikey=${process.env.REACT_APP_STOCK_TOKEN}`;
          //window.open(link, "_blank")
          }}>

          <div className="first-part">

            <div className="symbol">
              {dat[key].name}
            </div>

            <div className="stock-price">
              {dat[key].open}
            </div>

          </div>
          
          <div className="second-part">
           
            <div className={parseFloat(dat[key].percent_change) < 0 ? "percent-change negative" : "percent-change positive"}>
              {dat[key].percent_change}
            </div>
            
            <div className={dat[key].change < 0 ? "price-change negative" : "price-change  positive"}>
              {dat[key].change}
            </div>
            
          </div>
        </div>
      )})}
        
    </div>
  )
}

export default IndexScroll



