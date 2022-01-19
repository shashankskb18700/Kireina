import React, { useState } from "react";
import { connect } from "react-redux";
import { det } from "../../action/det";
import { authService } from "../../firebase/fbase";

const SignUp = (props) => {
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
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const SignUpGoogle = async () => {
    let auth = authService.getAuth();
    let provider = new authService.GoogleAuthProvider();
    const data = await authService.signInWithPopup(auth, provider);
    console.log(data);
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
          <button onClick={() => props.det({ email, password })}>
            Sign Up
          </button>
        </div>
        <button onClick={() => SignUpGoogle()}>Sign Up with google</button>
      </form>
    </div>
  );
};

export default connect(null, { det })(SignUp);
