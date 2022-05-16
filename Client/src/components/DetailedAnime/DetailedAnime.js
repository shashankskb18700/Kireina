import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Rating from "./Rating/Rating";

import Info from "./Info/Info";

//props are coming i need to render it on that page
//one reducer updation is removoing every state and even that sate is note accesible to other component

import "./DetailedAnime.css";
import ListScroller from "./ListScroller/ListScroller";

const DetailedAnime = (props) => {
  const [allInfo, setAllInfo] = useState({});
  const [vostfr, setVostfr] = useState({});
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);
  let plotStory = "";
  let bannerSrc = "";
  //it will cause innfinite rerender , figure way to stop it
  // setAllInfo(allInfo);
  console.log(props.detail.Clickd.newD);
  // setAllInfo(props.detail.Clickd.newD);
  if (props.detail.Clickd.newD) {
    if (allInfo !== props.detail.Clickd.newD.ann) {
      setAllInfo(props.detail.Clickd.newD.ann);

      setVostfr(props.detail.Clickd.newD.vostr);
      console.log(allInfo);
    }
  }

  if (allInfo) {
    if (Object.values(allInfo)[0]) {
      allInfo.info.map((a) => (
        <div>{a.$.type === "Plot Summary" ? (plotStory = a._) : ""}</div>
      ));
      plotStory = allInfo.$.type === "movie" ? vostfr.data.synop : plotStory;
    }
  }
  let url = "";

  // const banner = async (url) => {
  //   const res = await axios.post("/mored", { dwe: url });

  //   console.log(res);
  // };

  // props.detail.srchRedu.srch.d.map(async (a) => (
  //   <div>
  //     {console.log(
  //       "Attack on Titan Final Season Part 2" ===
  //         "Attack on Titan The Final Season Part 2"
  //     )}
  //   </div>
  // ));

  // allInfo.$ && allInfo.$.name === a.title_english
  //         ? props.detail.srchRedu.srch.d[
  //             props.detail.srchRedu.srch.d.indexOf(a)
  //           ].url
  //         : ""
  //     )

  // (url =
  //   props.detail.srchRedu.srch.d[
  //     props.detail.srchRedu.srch.d.indexOf(a)
  //   ].url && banner(url))

  // banner(url);
  console.log(url);

  // console.log(plotStory + "            i am plot ");
  // console.log(allInfo);
  // const { $, info, credit,episode } = allInfo;
  // console.log(info);
  // console.log($);

  // useEffect(() => {
  //   setAllInfo(props);
  // }, [props]);
  // console.log(props);
  // console.log(allInf);
  // data we have
  // $--> name
  // console.log(allInfo.$);
  // console.log(props.allInf);

  //cast list -> it too big it has name of both character and the person who played it

  //credit => it has name of animation creator and producer
  // console.log(allInfo.credit[0].company[0]._);

  //episode => it list out number of episodes
  // console.log(allInfo.episode.length);

  // info  -- image , height names title , generas ,plot story ,type , official website linnk , official japanese website

  // news- only news but very big section  lots of data  here

  // rating  - array containing object having three things, nb_score, weighted score , baysian score
  // console.log(Object.values(allInfo.ratings[0])[0].nb_votes);
  // console.log(allInfo.ratings[0].$.nb_votes);

  // related next  -> it has three object about adaption

  // realted prev-> only one object

  // release -> it has how many this of death note is released

  // review -> nothing but link for anime news network

  // staff -> it contains writer name

  // image
  // console.log(Object.values(allInfo.info[0].img[0])[0].src);

  //
  // console.log(Object.values(allInfo.info[0].img[0])[0].src);
  // style={{background:url(props.detail.Clickd.newD.vostr.data.banner)}}
  let bannerUrl = props.detail.Clickd.newD
    ? props.detail.Clickd.newD.vostr.data.banner
    : "";

  let youtubeUrl = props.detail.Clickd.newD
    ? props.detail.Clickd.newD.vostr.data.trailer
    : "";
  // console.log(props.detail.Clickd.newD.vostr.data.banner);

  const staffList = {
    Script: ["Script"],
    Director: ["Director"],
    "Sound Director": ["Sound Director"],
    Producer: ["Producer"],
    "Animation Director": ["Animation Director"],
  };

  // allInfo.staff
  // ? allInfo.staff.forEach{
  //   a => {

  // }

  // } : " ";
  // allInfo.staff.map((a) => {
  //   a.task[0] === "Director" ? staffList[a.task[0]].push(a.person[0]._) : "";
  // });

  // a.task[0] === "Script" ||
  //       a.task[0] === "Director" ||
  //       a.task[0] === "Sound Director" ||
  //       a.task[0] === "Producer" ||
  //       a.task[0] === "Animation Director"
  //       ? staffList[a.task[0]].push(a.person[0]._)
  //       : ""
  // <Info valueName={a.task[0]} value={a.person[0]._} />

  const episodes = [];

  if (allInfo.episode || allInfo.staff) {
    if (allInfo.episode) {
      for (let i = 0; i < allInfo.episode.length / 12; i++) {
        episodes.push(
          <ListScroller start={i * 12} end={(i + 1) * 12} allInfo={allInfo} />
        );
      }
    }
    for (let a of allInfo.staff) {
      if (a.task[0] === "Script") {
        staffList[a.task[0]].push(a.person[0]._);
      } else if (a.task[0] === "Director") {
        staffList[a.task[0]].push(a.person[0]._);
      } else if (a.task[0] === "Sound Director") {
        staffList[a.task[0]].push(a.person[0]._);
      } else if (a.task[0] === "Producer") {
        staffList[a.task[0]].push(a.person[0]._);
      } else if (a.task[0] === "Animation Director") {
        staffList[a.task[0]].push(a.person[0]._);
      }

      // a.task[0] === "Script" ||
      //       a.task[0] === "Director" ||
      //       a.task[0] === "Sound Director" ||
      //       a.task[0] === "Producer" ||
      //       a.task[0] === "Animation Director"
      //       ? staffList[a.task[0]].push(a.person[0]._)
      //       : ""
    }
  }

  const forward = () => {
    let lenCalc = allInfo.episode.length % 12;
    if (lenCalc === 0) {
      if (end <= allInfo.episode.length / 12 - 1) {
        setStart(start + 1);
        setEnd(end + 1);
      }
    } else {
      if (end <= allInfo.episode.length / 12) {
        setStart(start + 1);
        setEnd(end + 1);
      }
    }
  };
  const backward = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };
  const fuc = () => {
    return (
      <div className="detailed">
        <div
          className="imgAndTitle"
          style={{
            backgroundImage: `linear-gradient( rgb(255, 255, 255, 0), rgb(255 ,255, 255) ), url(${bannerUrl})`,
            // backgroundColor: "rgb(128 128 128)",

            backgroundPosition: "centre",
            backgroundSize: "100vw 66vh",
          }}
        >
          {/* <img src={bannerUrl}></img> */}
          <div>
            <img
              className="img-det"
              src={
                Object.keys(allInfo.info[0])[1] === "img"
                  ? allInfo.info[0].img.length > 1
                    ? Object.values(allInfo.info[0].img[1])[0].src
                    : Object.values(allInfo.info[0].img[0])[0].src
                  : ""
              }
              key={
                allInfo.$.type === "movie"
                  ? Object.values(allInfo.info[0].img[0])[0].src
                  : ""
              }
            />
            <h2 className="nameOf">{props.detail.Clickd.newD.name}</h2>
          </div>
        </div>

        <div className="allDetail">
          <div className="specific-det">
            <h4>
              <Info valueName={"Type"} value={allInfo.$.type} />{" "}
            </h4>

            {allInfo.ratings ? (
              <h5 style={{ width: "70px", height: "70px" }}>
                {/*                 
                nb_vote =={allInfo.ratings[0].$.nb_votes} <br></br>
                weighted_score= {allInfo.ratings[0].$.weighted_score}
                <br></br>
                bayesian_score= {allInfo.ratings[0].$.bayesian_score} */}
                <Rating
                  value={allInfo.ratings[0].$.weighted_score}
                  text={"Rating"}
                />
              </h5>
            ) : (
              <div></div>
            )}
          </div>

          <div className="story-credit">
            {/* <h2>Plot Summary</h2> */}
            <h3>{plotStory}</h3>
            {/* //only works with anime for managa you need to set fall back or go and render other page for managa */}
            {/* {console.log(allInfo.episode[0].title[0]._)} */}
            <h2> {allInfo.episode ? "Episode" : ""}</h2>
            <div className="episod">
              {/* {allInfo.episode
                ? allInfo.episode.map((a) => (
                    <div>
                      episode: {a.$.num} &nbsp; {a.title[0]._}
                      <br />
                    </div>
                  ))
                : ""} */}
              <div
                style={{
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontSize: "20px", fontWeight: "800" }}
                  className="forward"
                  onClick={() => backward()}
                >
                  &lt;
                </div>
                <div
                  style={{ fontSize: "20px", fontWeight: "800" }}
                  className="backward"
                  onClick={() => forward()}
                >
                  &gt;
                </div>
              </div>

              <div>{episodes.slice(start, end)}</div>
              {/* <ListScroller start={0} end={12} allInfo={allInfo} /> */}
              {/* {console.log(allInfo.episode.length)} */}
            </div>
            <h2>Credit</h2>
            <div className="credit">
              {allInfo.credit
                ? allInfo.credit.map((a) => (
                    <div>
                      <Info valueName={a.task[0]} value={a.company[0]._} />
                      {/* company -{a.company[0]._} &nbsp; task -{a.task[0]} */}
                    </div>
                  ))
                : ""}
            </div>
            {/* <div>{console.log(allInfo.credit[0].company[0]._)}</div>
            <div>{console.log(allInfo.credit[0].task[0])}</div> */}
            {/* here you have to do all the credit and those kind of stuff */}

            <div className="staff"></div>
            <h2>Staff</h2>
            {Object.values(staffList).map((a) => (
              <div className="staffLis">
                <div className="staffTask">{a[0]}</div>
                <div className="staffName">
                  {a.slice(1).map((name) => (
                    <div style={{ paddingBottom: "4px" }}>{name}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* <div className="cast">
              {allInfo.cast
                ? allInfo.cast.map((a) => (
                    <div>
                      Person-
                      {a.person[0]._} &nbsp; Role-
                      {a.role[0]}
                    </div>
                  ))
                : ""} */}
            {/* {console.log(allInfo.cast[0].person[0]._)}
              {console.log(allInfo.cast[0].role[0])} */}
            {/* {console.log(url.length > 0 ? banner(url) : "")} */}
            {/* </div> */}
            <div className="trailer">
              <h2> Trailer</h2>
              <br></br>

              {youtubeUrl ? (
                <iframe
                  frameBorder="0"
                  style={{ width: "100%", height: "600px" }}
                  src={youtubeUrl}
                ></iframe>
              ) : (
                <div>Not found </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {/* only for anime so check  it is anime or mangfirst  */}
        {/* <h4>toatal number of episode {allInfo.episode.length}</h4> */}
        {Object.values(allInfo)[0] ? fuc() : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { detail: state };
};
export default connect(mapStateToProps)(DetailedAnime);
