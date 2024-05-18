import React, { useState } from "react";
import { connect } from "react-redux";
import { det } from "../../redux/action/det";
import { authService } from "../../firebase/fbase";

import "./form.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const SignInGoogle = async () => {
    let auth = authService.getAuth();
    let provider = new authService.GoogleAuthProvider();
    const data = await authService.signInWithPopup(auth, provider);
    console.log(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {/* <form onSubmit={onSubmit}>
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
          

          <button onClick={() => props.det({ email, password })}>
            Sign IN
          </button>

          {/*  */}

      {/*  */}

      {/* <input
            type="button"
            value="Sign In"
            onClick={() => props.det({ email, password })}
          /> */}
      {/* </div> */}
      {/* <button onClick={() => SignInGoogle()}>Sign in with google</button> */}
      {/* // </form> */}

      {/*  */}

      {/* 
      
       */}

      <form className="login-form" onSubmit={onSubmit}>
        <div className="flex-row">
          <label className="lf--label" htmlFor="username"></label>
          <input
            name="email"
            id="username"
            className="lf--input"
            onChange={onChange}
            value={email}
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="flex-row">
          <label className="lf--label" htmlFor="password"></label>
          <input
            name="password"
            id="password"
            className="lf--input"
            onChange={onChange}
            value={password}
            placeholder="Password"
            type="password"
          />
        </div>

        <button
          className="lf--submit"
          onClick={() => props.det({ email, password })}
        >
          LOGIN
        </button>
        <br></br>
        <button className="lf--submit" onClick={() => SignInGoogle()}>
          {/* LOGIN IN WITH */}
          {/* <br></br> */}
          <i className="fab fa-google fa-2x"></i>
        </button>
        {/* <input  className="lf--submit"type="submit"  value="LOGIN" /> */}
      </form>
      {/* <a className="lf--forgot" >
        Forgot password?
      </a> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps, { det })(SignIn);
