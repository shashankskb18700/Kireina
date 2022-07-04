import React, { useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./TopAnime.css";

const TopAnime = ({ animeId }) => {
  const [hover, setHover] = useState("");
  // console.log(imgArr.imgArray.topAiring);

  // const imgArr = [];

  // if (imgArray) {
  //   imgArray.map((va) => (
  //     <div>
  //       {imgArr.push(
  //         <img className="compImg" key={va.value} src={`${va.value}`} />
  //       )}
  //     </div>
  //   ));
  // }

  // useEffect(() => {
  //   if (animeId.length > 0) {

  //    }
  // })

  let anime = [];
  let animeDetail = [];

  if (animeId) {
    animeId.map((data) => (
      <div>
        {console.log(data)}
        {console.log("")}
        {Object.keys(data.info[0])[1] === "img" &&
        data.$.type !== "manga" &&
        data.credit !== undefined
          ? data.info[0].img.length > 1
            ? anime.push(Object.values(data.info[0].img[1])[0].src) &&
              animeDetail.push(data)
            : anime.push(Object.values(data.info[0].img[0])[0].src) &&
              animeDetail.push(data)
          : ""}
      </div>
    ));
  }

  console.log(animeId);
  console.log(anime);
  console.log(animeDetail);

  const displayCard = (index) => {
    let id = animeDetail[index].$.id;
    console.log(id);
    setHover(id);
  };
  const hideCard = (index) => {
    setHover(0);
  };
  return (
    <div className="content">
      {/* //onMouseEnter  */}
      <div className="h-scroll">
        {anime.map((imgUrl) => (
          <div
            onMouseEnter={() => displayCard(anime.indexOf(imgUrl))}
            onMouseLeave={() => {
              hideCard(anime.indexOf(imgUrl));
            }}
            className="card"
          >
            <div>
              <img src={imgUrl} key={imgUrl}></img>
              <div className="wishlistName">
                {animeDetail[anime.indexOf(imgUrl)].$.name}
              </div>
            </div>
            <div>
              {animeDetail[anime.indexOf(imgUrl)].$.id === hover ? (
                <div
                  style={{
                    width: "100px",
                    height: "190px",
                    background: "red",
                    zIndex: "53",
                    position: "absolute",
                    // top: "400px",
                  }}
                >
                  {" "}
                  {imgUrl}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}

        <button>View All</button>
      </div>

      <div className="chain"></div>
    </div>
  );
};
export default TopAnime;

// you are unable to acces top airing because of this syntax that you have use in passing value  i.e  item ? item.topAiring: undefined , there might be case that item has something called headr but it dont have top airing but again after getting value in top airing you are unable to use it
