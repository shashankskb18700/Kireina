import React from "react";
import { connect } from "react-redux";

const AnimeSearched = (props) => {
  console.log(props.detail);
  const detail = Object.values(props.detail);
  console.log(detail[0]);
  const anime = Object.values(detail[0]);

  console.log(anime);
  const arr = [];
  const data = anime.map((d) => (
    <div>
      {console.log(d)}
      {d.map((a) => (
        <div>
          {console.log(Object.keys(a.info[0])[1] === "img")}

          {Object.keys(a.info[0])[1] === "img"
            ? a.info[0].img.map((y) => (
                <div>{arr.push(Object.values(y)[0].src)}</div>
              ))
            : ""}
        </div>
      ))}
    </div>
  ));
  console.log(arr);

  return (
    <div>
      <h1>AnimeSearched</h1>
      {/* {data} */}
      {arr.map((a) => (
        <img src={a} key={a} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { detail: state.srchRedu };
};
export default connect(mapStateToProps)(AnimeSearched);
