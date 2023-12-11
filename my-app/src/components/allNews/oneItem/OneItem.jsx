import { useEffect, useState } from "react";


function OneItem (){
  const [singleItem, setSingleItem] = useState(false);

  useEffect(() => {
  let newsItem = JSON.parse(localStorage.getItem('newsItem'));
  if (newsItem) {
    setSingleItem(newsItem);
   }
  })
  if(singleItem){
    return (
      <div>
        <h2>{singleItem.title}</h2>
        <img src={singleItem.urlToImage} alt="NewsImage"/>
      </div>
    )
  }else {
    return (
      <h1>One Item</h1>
    )
  }  
}
export default OneItem;