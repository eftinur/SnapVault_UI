import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useContext(AUTH_CONTEXT);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container mx-auto py-20">
      <h5 className="text-center">Sign up to share your Images</h5>
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
        <div className="input-container">
          <input
            placeholder="Enter Email"
            className="input-field"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="input-field" className="input-label">
            Email
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <input
            placeholder="Enter Password"
            className="input-field"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="input-field" className="input-label">
            Password
          </label>
          <span className="input-highlight"></span>
        </div>

        {error && <p>{error}</p>}
        <p className="mx-5 my-2 text-xs">
          Already have an account! <Link to="/sign_in" className="underline">Sign In</Link>
        </p>
        <div className="mx-5">
          <button className="underline">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
