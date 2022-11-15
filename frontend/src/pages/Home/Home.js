import React from "react";
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import Favourites from "../../components/layouts/favourites/Favourites";
import sym from "../../components/layouts/graph/interval";
import company_news from "../../components/layouts/news_comp/company-news";
import { useDocumentTitle } from "../../components/layouts/Title/Title";

const Home = () => {
	useDocumentTitle("");
	const news = company_news.slice(0, 5).map((values, key) => {
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
				</div>
			)
		);
	});

	return (
		<div className="main_test">
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
