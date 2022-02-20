import React from "react";
import { connect } from "react-redux";
import DetailedAnime from "./components/DetailedAnime/DetailedAnime";
import { Tester } from "../src/redux/action/tester";

const Tes = (props) => {
  console.log("e");
  console.log(props);

  let count = 0;
  return (
    <div>
      <h2>tes</h2>

      <button onClick={() => props.Tester("jusih ")}>click me</button>

      {/* <DetailedAnime /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    de: state,
  };
};

export default connect(mapStateToProps, { Tester })(Tes);
