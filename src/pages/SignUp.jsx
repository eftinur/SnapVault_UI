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
    <div className="container min-h-screen flex items-center mx-auto py-20 px-4">
      <div className="w-full lg:w-2/4 mx-auto shadow-xl px-2 py-8">
        <h5 className="text-2xl font-bold text-center capitalize">Register now to secure your files</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              placeholder="Enter Email"
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label for="input-field" className="input-label">
              Password
            </label>
            <span className="input-highlight"></span>
          </div>

          {error && <p className="mx-5 text-red-500">{error}</p>}
          <p className="mx-5 my-2 text-xs">
            Already have an account!{" "}
            <Link to="/sign_in" className="underline">
              Sign In
            </Link>
          </p>
          <div className="mx-5 mt-4">
            <button className="">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
