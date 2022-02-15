import React from "react";

const DetailedAnime = ({ allInfo }) => {
  // data we have
  // $--> name
  // console.log(allInfo.$.name);

  //cast list -> it too big it has name of both character and the person who played it

  //credit => it has name of animation creator and producer

  //episode => it list out number of episodes
  // console.log(allInfo.episode.length);

  // info  -- image , height names title , generas ,plot story ,type , official website linnk , official japanese website

  // news- only news but very big section  lots of data  here

  // rating  - array containing object having three things, nb_score, weighted score , baysian score
  // console.log(Object.values(allInfo.ratings[0])[0].nb_votes);
  console.log(allInfo.ratings[0].$.nb_votes);

  // related next  -> it has three object about adaption

  // realted prev-> only one object

  // release -> it has how many this of death note is released

  // review -> nothing but link for anime news network

  // staff -> it contains writer name

  // image
  // console.log(Object.values(allInfo.info[0].img[0])[0].src);

  //

  console.log(allInfo);
  return (
    <div>
      <h1>Detailed anime</h1>
      <div>
        <h4>name: {allInfo.$.name}</h4>
        <h4>type: {allInfo.$.type}</h4>
        <h4>toatal number of episode {allInfo.episode.length}</h4>
        <div>
          <h4>Raitng and review===</h4>
          <h5>
            nb_vote =={allInfo.ratings[0].$.nb_votes} ,<br></br>
            {allInfo.ratings[0].$.weight},<br></br>
            {allInfo.ratings[0].$.nb_votes}
          </h5>
        </div>
        <img
          src={Object.values(allInfo.info[0].img[0])[0].src}
          key={Object.values(allInfo.info[0].img[0])[0].src}
        />
      </div>
    </div>
  );
};
export default DetailedAnime;
