import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//props are coming i need to render it on that page
//one reducer updation is removoing every state and even that sate is note accesible to other component

import "./DetailedAnime.css";

const DetailedAnime = (props) => {
  const [allInfo, setAllInfo] = useState({});
  let plotStory = "";
  //it will cause innfinite rerender , figure way to stop it
  // setAllInfo(allInfo);
  console.log(props.detail.Clickd.newD);
  // setAllInfo(props.detail.Clickd.newD);
  if (allInfo !== props.detail.Clickd.newD) {
    setAllInfo(props.detail.Clickd.newD);

    console.log(allInfo);
  }

  if (Object.values(allInfo)[0]) {
    allInfo.info.map((a) => (
      <div>{a.$.type === "Plot Summary" ? (plotStory = a._) : ""}</div>
    ));
  }

  props.detail.srchRedu.srch.d.map((a) => (
    <div>{console.log(a.title_english)}</div>
  ));
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

  const fuc = () => {
    return (
      <div className="detailed">
        <div className="imgAndTitle">
          <img
            className="img-det"
            src={
              Object.keys(allInfo.info[0])[1] === "img"
                ? allInfo.info[0].img.length > 1
                  ? Object.values(allInfo.info[0].img[1])[0].src
                  : Object.values(allInfo.info[0].img[0])[0].src
                : ""
            }
            key={Object.values(allInfo.info[0].img[0])[0].src}
          />
          <h2 className="nameOf">{allInfo.$.name}</h2>
        </div>

        <div className="allDetail">
          <div className="specific-det">
            <h4>type: {allInfo.$.type}</h4>
            <h4>Raitng and review===</h4>
            <h5>
              nb_vote =={allInfo.ratings[0].$.nb_votes} <br></br>
              weighted_score= {allInfo.ratings[0].$.weighted_score}
              <br></br>
              bayesian_score= {allInfo.ratings[0].$.bayesian_score}
            </h5>
          </div>

          <div className="story-credit">
            <h2>Plot Summary</h2>
            <h3>{plotStory}</h3>

            {/* //only works with anime for managa you need to set fall back or go and render other page for managa */}
            {/* {console.log(allInfo.episode[0].title[0]._)} */}

            <h2>Episode</h2>
            <div className="episod">
              {allInfo.episode
                ? allInfo.episode.map((a) => (
                    <div>
                      episode: {a.$.num} &nbsp; {a.title[0]._}
                      <br />
                    </div>
                  ))
                : ""}
            </div>

            <h2>Credit</h2>
            <div className="credit">
              {allInfo.credit
                ? allInfo.credit.map((a) => (
                    <div>
                      company -{a.company[0]._} &nbsp; task -{a.task[0]}
                    </div>
                  ))
                : ""}
            </div>
            {/* <div>{console.log(allInfo.credit[0].company[0]._)}</div>
            <div>{console.log(allInfo.credit[0].task[0])}</div> */}

            {/* here you have to do all the credit and those kind of stuff */}
            <h2>Cast</h2>
            <div className="cast">
              {allInfo.cast.map((a) => (
                <div>
                  Person-
                  {a.person[0]._} &nbsp; Role-
                  {a.role[0]}
                </div>
              ))}
              {/* {console.log(allInfo.cast[0].person[0]._)}
              {console.log(allInfo.cast[0].role[0])} */}
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
