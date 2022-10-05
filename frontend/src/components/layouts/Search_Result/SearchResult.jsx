import React from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = (props) => {

    //const link = `https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_STOCK_TOKEN}&symbols=`
    const handlefilter = () => {
        props.onClick('clicked');
    }

    function fixing (str){
        return str
        .trim().toLowerCase()
        .split(' ')
        .reduce((sentence, word) => `${sentence} ${word.charAt(0).toUpperCase()}${word.substring(1)}`, '')
        .trim();
    }

    return (
        <div className="search-result">
            {props.data.slice(0, 15).map((value, key) => {
                return (
                    <div className="card" key={key}>
                        <NavLink to={'/stock'} state={{ symbol: value.symbol }} onClick={handlefilter}>
                            {value.symbol + " | " + fixing(value.description)}
                        </NavLink>
                    </div>
                );
            })}
        </div>
    )
}


//{data.filter((data) => data.author.toLowerCase().includes(data)).map((data) => (    <p> {data.title} </p>))}
export default SearchResult;