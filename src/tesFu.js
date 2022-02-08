import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class TesFu extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  fun = async () => {
    // const dd = await axios.get("http://localhost:5000", {
    //   mode: "cors",
    // });
    // console.log(dd);

    // const response = await fetch("http://localhost:5000/", { mode: "cors" });
    // const data = await response.json();
    // console.log({ data });

    // const dc = await axios.get("/serve", {
    //   mode: "cors",
    // });
    // console.log(dc);
    const { name } = this.state;
    const nam = {
      name,
    };

    const pos = await axios.post("/post", nam);
    console.log(pos);
  };
  onChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <h1>i am a tester</h1>
        <input
          type="text"
          placeholder={"input"}
          onChange={(e) => this.onChange(e)}
        />
        <button onClick={() => this.fun()}>boooo</button>
      </div>
    );
  }
}

export default connect()(TesFu);
