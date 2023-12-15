import { useEffect, useState } from "react";
import axios from "axios";

function SingleNews () {
  const [news, setNews] = useState(false);
  useEffect(() => {
    let newsItem = JSON.parse(localStorage.getItem('newsItem'));
    if (newsItem) {
      setNews(newsItem);
    }
  }, []);

  if (news) {
    return (
        <div>
          <h2>{news.title}</h2>
          <img src={news.urlToImage} alt={news.title}/>
        </div>
    )
  } else {
    return (
        <h1>one news</h1>
    )
  }
}
export default SingleNews;