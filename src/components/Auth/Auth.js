import React, { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  const onClick = () => {
    // changing previous value
    setNewUser((e) => !e);
  };
  return (
    <div>
      {newUser ? <SignUp /> : <SignIn />}
      <button onClick={onClick}>
        {newUser ? "Already a user" : "new user"}{" "}
      </button>
    </div>
  );
};
export default Auth;
