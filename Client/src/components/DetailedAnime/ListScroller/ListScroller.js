import React from "react";

import "./ListScroller.css";
const ListScroller = ({ start, end, allInfo }) => {
  // console.log(allEpisode.slice(start, end));
  console.log(allInfo ? allInfo.episode.slice(start, end) : "");
  return (
    <div>
      <div className="listIndivisual">
        {allInfo
          ? allInfo.episode.slice(start, end).map((a) => (
              <div className="episodeBlock">
                <div className="epi">ep: {a.$.num}</div> &nbsp; {a.title[0]._}
                <br />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ListScroller;
