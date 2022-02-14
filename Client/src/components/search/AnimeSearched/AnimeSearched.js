import React from "react";
import { connect } from "react-redux";

const AnimeSearched = (props) => {
  console.log(Object.keys(props.detail));
  const detail = Object.values(props.detail);
  const arr = [];
  const arrDetail = [];
  if (Object.keys(props.detail).length !== 0) {
    console.log(detail[0]);
    const anime = Object.values(detail[0]);

    console.log(anime);

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
    console.log(arrDetail[index]);
  };

  return (
    <div>
      <h1>AnimeSearched</h1>
      {/* {data} */}
      {arr.map((a) => (
        <img src={a} key={a} onClick={() => fullDetail(arr.indexOf(a))} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { detail: state.srchRedu };
};
export default connect(mapStateToProps)(AnimeSearched);

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
