import "./_NewsListSwiper.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const baseURL = "https://newsapi.org/v2/top-headlines";
const apiKey = "ef39d034e32f4a79bf0ab00254769b14";


function NewsListSwiper () {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 function ShowOneItem(e){
  let id = e.currentTarget.dataset.newsid;
  localStorage.setItem('newsItem', JSON.stringify(news[id]));
  navigate('/all-news/one-item')
}

  useEffect(() => {
    axios.get(baseURL, {
      params: {
        APIkey: apiKey,
        country: 'ua',
        category: 'general',
        pageSize: 3,
      }})
        .then(response => {
          setNews(response.data.articles);
        })
        .catch(error => {
          setError(error.message);
        })
  }, []);

  if(error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    )
  }else if (news) {
    const items = news.map((newsItem, index) =>
    <div key={index} className="newsItem" data-newsid={index} onClick={ShowOneItem}>
      <div className="link">
        <div className="img-wrapper">
          <img src={newsItem.urlToImage} alt="NewsImage" />
        </div>
          <h2>{newsItem.title}</h2>
      </div>
    </div>
    )
    return (
      <div className="newsItems">
        {items}
      </div> 
    )
  }
}

export default NewsListSwiper;