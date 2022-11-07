const newsData = async (stockName={}, newsArticle, action) => {

  if (action === 'getNews'){
      return await getNews(stockName);
  }
  else if (action === 'addNews'){
      return await addNews(newsArticle);
  }
  else if (action === 'removeNews'){
      return await removeNews(newsArticle);
  }
}

module.exports = newsData;