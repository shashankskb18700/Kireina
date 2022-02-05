import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./TopAnime.css";

const TopAnime = ({ imgArray }) => {
  // console.log(imgArr.imgArray.topAiring);

  const imgArr = [];

  if (imgArray) {
    imgArray.map((va) => (
      <div>
        {imgArr.push(
          <img className="compImg" key={va.value} src={`${va.value}`} />
        )}
      </div>
    ));
  }

  return (
    <div className="content">
      <div className="h-scroll">{imgArr.map((a) => a)}</div>
      <div className="chain"></div>
    </div>
  );
};
export default TopAnime;

// you are unable to acces top airing because of this syntax that you have use in passing value  i.e  item ? item.topAiring: undefined , there might be case that item has something called headr but it dont have top airing but again after getting value in top airing you are unable to use it
