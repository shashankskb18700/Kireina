import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import DetailedAnime from "../../DetailedAnime/DetailedAnime";

import { clickedAnime } from "../../../redux/action/clickedAnime";

import { Tester } from "../../../redux/action/tester";

const AnimeSearched = (props) => {
  const [arrState, setArrState] = useState({});

  // console.log(Object.keys(props.detail));

  console.log(props.full);

  const detail = Object.values(props.detail.srch);
  const arr = [];
  const arrDetail = [];
  console.log(props.detail.srch);
  if (Object.keys(props.detail.srch).length !== 0) {
    console.log(detail[0]);
    const anime = Object.values(detail[0]);

    // console.log(anime);

    anime.map((d) => (
      <div>
        {console.log(d)}
        {d.map((a) => (
          <div>
            {arrDetail.push(a)}
            {console.log(Object.keys(a.info[0])[1] === "img")}
            {/* {console.log(Object.values(a.ratings[0])[0])} */}

            {Object.keys(a.info[0])[1] === "img"
              ? arr.push(Object.values(a.info[0].img[0])[0].src)
              : ""}
            <img src="#" />
          </div>
        ))}
      </div>
    ));
  }
  console.log(arr);
  console.log(arrDetail);

  const fullDetail = (index) => {
    console.log(index);
    setArrState(arrDetail[index]);
    // <DetailedAnime allInfo={index} />;
    props.clickedAnime(arrDetail[index]);
  };
  // console.log(arrDetail[0]);
  console.log(arrState);

  return (
    <div>
      <h1>AnimeSearched</h1>
      {arr.map((a) => (
        <Link to="/animeD/fullD">
          <img src={a} key={a} onClick={() => fullDetail(arr.indexOf(a))} />
        </Link>
      ))}
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
