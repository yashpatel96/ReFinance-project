import React, { useState, useEffect } from "react";
import './Stock.css';
import {useLocation} from 'react-router-dom'
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import Favourites from '../../components/layouts/favourites/Favourites';
import { useDocumentTitle } from "../../components/layouts/Title/Title";
import axios from "axios";

const Stock = () => {
	useDocumentTitle("- Stock");
	const [stockData, setStockData] = useState();
	const [stockNews, setStockNews] = useState();
	const [stockCandle, setStockCandle] = useState();
	
	const location = useLocation();
	const symbol = location.state.symbol;

	const [homeNews, setHomeNews] = useState([]);
	//const sym = "MSFT"

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + "homenews")
			.then((res) => setHomeNews(res.data))
			.catch((err) => console.log(err));
	}, []);

	const news = homeNews.map((values, key) => {
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} title={values.title} description={values.description} link={values.link} />
				</div>
			)
		);
	});

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=data`)
			.then((res) => setStockData(res.data))
			.catch((err) => console.log(err));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=news`)
			.then((res) => setStockNews(res.data))
			.catch((err) => console.log(err));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=candle`)
			.then((res) => setStockCandle(res.data))
			.catch((err) => console.log(err));
	}, [symbol]);

	console.log("data", stockData)
	console.log("news", stockNews)
	console.log("candle", stockCandle)

	/* const news = stockNews.map((values, key) => {
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} title={values.title} description={values.description} link={values.link} />
				</div>
			)
		);
	}); */
  return (
    <div className='main_test'>
			<div className='mainweb'>
				<div className='home_graph'>
					<Graph symbol={symbol} />
				</div>
				<div className='favourite'>
					<Favourites />
				</div>
				<div className='news'>{news}</div>
			</div>
		</div>
  )
}

export default Stock