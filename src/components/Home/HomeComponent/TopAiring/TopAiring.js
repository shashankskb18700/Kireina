import React from "react";

const TopAiring = ({ imgArray }) => {
  // console.log(imgArr.imgArray.topAiring);
  console.log(imgArray);

  if (imgArray) {
    imgArray.map((va) => console.log(va.value));
  }
  return (
    <div>
      <h3> i am top airing </h3>
    </div>
  );
};
export default TopAiring;

// you are unable to acces top airing because of this syntax that you have use in passing value  i.e  item ? item.topAiring: undefined , there might be case that item has something called headr but it dont have top airing but again after getting value in top airing you are unable to use it
