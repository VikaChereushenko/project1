import SwiperHome from "./swiper-home/SwiperHome";
import "../allNews/newsListSwiper/_NewsListSwiper.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";

const baseURL = "https://newsapi.org/v2/top-headlines";
const apiKey = "ef39d034e32f4a79bf0ab00254769b14";

function Home() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(baseURL, {
      params: {
        APIkey: apiKey,
        country: 'ua',
        category: 'general',
        pageSize: 3,
      }
    })
        .then(response => {
          setNews(response.data.articles);
        })
        .catch(error => {
          setError(error.message);
        })
  }, []);
  return (
      <>
        <h1>HOME</h1>
        <SwiperHome news={news} error={error}/>
      </>
  )
}

export default Home;