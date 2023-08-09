import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AUTH_CONTEXT);

  // Handle Google Firebase user_signout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User is Signed_Out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto flex justify-between py-4">
      <a href="/">SnapVault</a>
      {user ? (
        <button onClick={handleLogOut}>Sign Out</button>
      ) : (
        <Link to="/sign_up">Sign Up</Link>
      )}
    </div>
  );
};

export default Navbar;
