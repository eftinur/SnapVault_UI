import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = useContext(AUTH_CONTEXT);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container mx-auto py-20">
      <h5 className="text-center">Sign in to share your Images</h5>
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
          Don't have an account?{" "}
          <Link to="/sign_up" className="underline">
            Sign Up
          </Link>
        </p>
        <div className="mx-5">
          <button className="underline">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
