import React from "react";
import { connect } from "react-redux";
import DetailedAnime from "./components/DetailedAnime/DetailedAnime";

const Tes = (props) => {
  console.log("e");
  console.log(props);
  return (
    <div>
      <h2>tes</h2>
      {/* <DetailedAnime /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    de: state,
  };
};

export default connect(mapStateToProps)(Tes);
