import React, { useState } from "react";
import { connect } from "react-redux";
import { authService } from "../../firebase/fbase";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./Auth.css";

const Auth = (props) => {
  const [newUser, setNewUser] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onClick = () => {
    // changing previous value
    setNewUser((e) => !e);
  };

  console.log(props.authDtls === true);
  // if (props.authDtls) {
  //   const { email, password } = props.authDtls;
  //   setEmail(email);
  //   setPassword(password);
  // }

  const SignInSignup = async () => {
    const auth = authService.getAuth();
    let data;
    const { email, password } = props.authDtls;
    try {
      if (newUser) {
        data = await authService.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //sign up
      } else {
        data = await authService.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        //sign in
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (props.authDtls.email && props.authDtls.password) {
    SignInSignup();
  }

  return (
    <div className="authh">
      {newUser ? <SignUp /> : <SignIn />}
      <button onClick={onClick}>
        {newUser ? "Already a user" : "new user"}{" "}
      </button>
      {/* {props.authDtls ? SignInSignup() : null} */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { authDtls: state.AuthDetail };
};
export default connect(mapStateToProps)(Auth);
