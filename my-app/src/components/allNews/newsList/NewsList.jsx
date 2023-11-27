import "./_NewsList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const baseURL = "https://newsapi.org/v2/top-headlines";
const apiKey = "ef39d034e32f4a79bf0ab00254769b14";

function NewsList () {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(baseURL, {
      params: {
        APIkey: apiKey,
        country: 'us',
        category: 'general',
        pageSize: 25,
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
    <div key={index} className="newsItem">
      <Link to={"/news/" + newsItem.id} className="link">
        <div className="imgWrapper">
          <img src={newsItem.urlToImage} />
        </div>
         <h2>{newsItem.title}</h2>
      </Link>
    </div>
    )
    return (
      <div className="newsItems">
        {items}
      </div>
    )
  }
}
export default NewsList;