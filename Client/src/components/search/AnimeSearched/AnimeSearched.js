import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import DetailedAnime from "../../DetailedAnime/DetailedAnime";

import { clickedAnime } from "../../../redux/action/clickedAnime";

import { Tester } from "../../../redux/action/tester";

import "./AnimeSearched.css";

const AnimeSearched = (props) => {
  const [arrState, setArrState] = useState({});

  // console.log(Object.keys(props.detail));

  console.log(props.full);
  const arr = [];
  const arrDetail = [];
  let anime = [];
  let manga = [];

  const animeDetail = [];
  const mangaDetail = [];

  // console.log(props.detail.srch);

  if (Object.values(props.detail)[0]) {
    const detail = Object.values(props.detail.srch);
    console.log(detail);

    if (Object.keys(props.detail.srch).length !== 0) {
      console.log(detail[0]);
      const animeManga = Object.values(detail[0].ann);

      // anime has two array one of really anime and another of manga so to seprate just check they have two array or not and split anime and manga apart
      console.log(animeManga);
      // anime = animeManga[0];
      // manga = animeManga[1];

      animeManga.map((d) => (
        <div>
          {console.log(d)}
          {d.map((a) => (
            <div>
              {a.$.type === "manga"
                ? mangaDetail.push(a)
                : a.credit !== undefined
                ? animeDetail.push(a)
                : ""}
              {/* {console.log(Object.keys(a.info[0])[1] === "img")} */}
              {/* {console.log(a.info[0])} */}
              {/* {console.log(Object.values(a.ratings[0])[0])} */}
              {/* {console.log(a.$.type === "anime")} */}
              {/* // here either you do img[1] whihc will give you better quality photo or in some case it is missing so be sure in taking img[0] */}
              {/* {Object.keys(a.info[0])[1] === "img"
                ? arr.push(Object.values(a.info[0].img[0])[0].src)
                : ""} */}
              {/* {console.log(Object.values(a.info[0].img[1])[0].src)} */}

              {/* {console.log(a.$.type)} */}
              {/* {console.log(Object.values(a.info[0].img).length)} */}
              {/* // i think in code geass case Object.keys(a.info[0])[1] === "img"
              this thing ins nothing */}
              {/* {Object.keys(a.info[0])[1] === "img"
                ? Object.values(a.info[0].img).length > 1
                  ? arr.push(Object.values(a.info[0].img[1])[0].src)
                  : arr.push(Object.values(a.info[0].img[0])[0].src)
                : ""} */}

              {/*  */}

              {/* {Object.keys(a.info[0])[1] === "img"
                ? a.info[0].img.length > 1
                  ? arr.push(Object.values(a.info[0].img[1])[0].src)
                  : arr.push(Object.values(a.info[0].img[0])[0].src)
                : ""} */}
              {/* && a.$.type !== "manga"
              
                && a.$.type === "manga" */}
              {console.log(a.credit)}
              {Object.keys(a.info[0])[1] === "img" &&
              a.$.type !== "manga" &&
              a.credit !== undefined
                ? a.info[0].img.length > 1
                  ? anime.push(Object.values(a.info[0].img[1])[0].src)
                  : anime.push(Object.values(a.info[0].img[0])[0].src)
                : ""}

              {Object.keys(a.info[0])[1] === "img" && a.$.type === "manga"
                ? a.info[0].img.length > 1
                  ? manga.push(Object.values(a.info[0].img[1])[0].src)
                  : manga.push(Object.values(a.info[0].img[0])[0].src)
                : ""}
            </div>
          ))}
        </div>
      ));
    }
  }
  console.log(arr);
  console.log(arrDetail);

  // anime = arr.slice(0, anime.length);
  // manga = arr.slice(anime.length);

  console.log(anime);
  console.log(manga);

  const fullDetail = (index) => {
    // console.log(index);
    // console.log(animeDetail);
    setArrState(animeDetail[index]);
    // <DetailedAnime allInfo={index} />;
    props.clickedAnime(animeDetail[index], props.full.srchRedu.srch.d);
  };

  const fullDetailManga = (index) => {
    console.log(index);

    setArrState(mangaDetail[index]);
    // <DetailedAnime allInfo={index} />;
    props.clickedAnime(mangaDetail[index], props.full.srchRedu.srch.d);
  };

  // console.log(arrDetail[0]);
  console.log(arrState);

  return (
    <div>
      <h3>ANIME</h3>
      <div className="anime-manga-grid">
        {anime.map((a) => (
          <Link to="/animeD/fullD" style={{ textDecoration: "none" }}>
            <img
              className="anim-mang"
              src={a}
              key={a}
              onClick={() => fullDetail(anime.indexOf(a))}
            />
            <div className="title-nam">
              {animeDetail[anime.indexOf(a)].$.name}
              {/* yahi pe synopses bhi dal do lekin put it in red zone  */}
            </div>
          </Link>
        ))}
      </div>
      <h3>MANGA</h3>
      <div className="anime-manga-grid">
        {manga.map((a) => (
          <Link to="/animeD/fullD" style={{ textDecoration: "none" }}>
            <img
              className="anim-mang"
              src={a}
              key={a}
              onClick={() => fullDetailManga(manga.indexOf(a))}
            />
            <div className="title-nam">
              {mangaDetail[manga.indexOf(a)].$.name}
            </div>
          </Link>
        ))}
      </div>
      {/* {arr.map((a) => (
        <img
          src={a}
          key={a}
          onClick={() => props.clickedAnime(arrDetail[arr.indexOf(a)])}
        />
      ))} */}
      {/* {arr.map((a) => (
        <img src={a} key={a} onClick={() => props.Tester()} />
      ))} */}
      //only anime which is aired on tv nothing else
      {/* {arrState.$.type === "TV" ? <DetailedAnime allInf={arrState} /> : "ewe"} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { detail: state.srchRedu, full: state };
};
export default connect(mapStateToProps, { clickedAnime, Tester })(
  AnimeSearched
);

// arr.push(Object.values(a.info[0].img[0].src))

// a.info[0].img.map((y) => (
//   <div>
//     {arr.push(
//       Object.values(y)[0].height > 250
//         ? Object.values(y)[0].src
//         : ""
//     )}
//   </div>
// ))
