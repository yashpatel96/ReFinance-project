import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import Favourites from "../../components/layouts/favourites/Favourites";
//import sym from "../../components/layouts/graph/interval";
//import company_news from "../../components/layouts/news_comp/company-news";
import { useDocumentTitle } from "../../components/layouts/Title/Title";

const Home = () => {
	useDocumentTitle("");
	const [homeNews, setHomeNews] = useState([]);
	const sym = "MSFT";

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
					<NewsComp
						image={values.image}
						title={values.title}
						description={values.description}
						link={values.link}
						uploaded_datetime={values.uploaded_datetime / 1000}
					/>
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
	);
};

export default Home;
