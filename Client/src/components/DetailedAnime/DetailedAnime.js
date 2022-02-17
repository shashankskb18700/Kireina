import React, { useState } from "react";
import { connect } from "react-redux";

//props are coming i need to render it on that page
//one reducer updation is removoing every state and even that sate is note accesible to other component

const DetailedAnime = ({ allInfo }) => {
  const [allIn, setAllInfo] = useState({});
  //it will cause innfinite rerender , figure way to stop it
  // setAllInfo(allInfo);
  console.log(allIn);
  const d = () => setAllInfo(allInfo);

  // data we have
  // $--> name
  // console.log("ew=");
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

  return (
    <div>
      <h1>Detailed anime</h1>
      <div>
        <h4>name: {allInfo.$.name}</h4>
        <h4>type: {allInfo.$.type}</h4>
        {/* only for anime so check  it is anime or mangfirst  */}
        <h4>toatal number of episode {allInfo.episode.length}</h4>
        <div>
          <h4>Raitng and review===</h4>
          <h5>
            nb_vote =={allInfo.ratings[0].$.nb_votes} <br></br>
            weighted_score= {allInfo.ratings[0].$.weighted_score}
            <br></br>
            bayesian_score= {allInfo.ratings[0].$.bayesian_score}
          </h5>
        </div>
        <img
          src={Object.values(allInfo.info[0].img[0])[0].src}
          key={Object.values(allInfo.info[0].img[0])[0].src}
        />
        {/* <h4>credits:  </h4> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { allInf: state };
};
export default connect(mapStateToProps)(DetailedAnime);
