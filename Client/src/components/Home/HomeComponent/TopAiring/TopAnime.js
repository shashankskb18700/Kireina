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
    setTimeout(function () {}, 2000);
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
            onClick={() =>
              setTimeout(function () {
                displayCard(anime.indexOf(imgUrl));
              }, 500)
            }
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
                    width: "370px",

                    paddingLeft: "50px",
                    height: "320px",
                    // background: "red",
                    zIndex: "53",
                    position: "absolute",
                    overflow: "auto",
                    // top: "400px",
                    transition: "0 3s",
                    WebkitTransition: "0 3s",
                  }}
                  className="popUpCard"
                >
                  {" "}
                  <div>
                    <div className="cardName">
                      {animeDetail[anime.indexOf(imgUrl)].$.name}
                    </div>
                    <div className="ratingAndType">
                      <div>
                        TYPE : {animeDetail[anime.indexOf(imgUrl)].$.type}
                      </div>
                      <div>
                        ⭐️RATING :
                        {animeDetail[anime.indexOf(imgUrl)].ratings
                          ? animeDetail[anime.indexOf(imgUrl)].ratings[0].$
                              .weighted_score
                          : ""}
                      </div>
                    </div>
                    <div className="ratingAndType">
                      <div>
                        {" "}
                        Episode :
                        {animeDetail[anime.indexOf(imgUrl)].episode
                          ? animeDetail[anime.indexOf(imgUrl)].episode.length
                          : "unavailable"}
                      </div>
                      <div>
                        {" "}
                        PRECISION :
                        {animeDetail[anime.indexOf(imgUrl)].$.precision}{" "}
                      </div>
                    </div>
                    <div className="plotSt">
                      {animeDetail[anime.indexOf(imgUrl)].info.map((a) => (
                        <div>{a.$.type === "Plot Summary" ? a._ : ""}</div>
                      ))}
                    </div>
                  </div>
                  {/* {imgUrl} */}
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
