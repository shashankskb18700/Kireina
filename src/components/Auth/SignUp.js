import React, { useState } from "react";

const SignUp = () => {
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

  return (
    <div>
      <form>
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
          <button>Sign Up</button>
        </div>
        <button>Sign Up with google</button>
      </form>
    </div>
  );
};

export default SignUp;
