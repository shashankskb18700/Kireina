import React, { useState } from "react";
import { connect } from "react-redux";
import { det } from "../../action/det";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  console.log(props.state);
  // console.log(props.details());
  const a = email + password;

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="email"
            type="text"
            onChange={onChange}
            value={email}
            placeholder="email"
            required
          />
          <input
            name="passowrd"
            type="password"
            onChange={onChange}
            value={password}
            placeholder="password"
            required
          />
          {/* // sending two value in the action creator is giving error */}

          <button onClick={() => props.det({ email, password })}>
            Sign IN
          </button>
          {/* <input
            type="button"
            value="Sign In"
            onClick={() => props.det({ email, password })}
          /> */}
        </div>
        <button>Sign in with google</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps, { det })(SignIn);
