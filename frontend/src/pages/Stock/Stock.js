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
	const [homeNews, setHomeNews] = useState([]);

	const location = useLocation();
	const sym = location.state.symbol;


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
  return (
    <div className='main_test'>
			<div className='mainweb'>
				<div className='home_graph'>
					<Graph symbol={sym} />
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