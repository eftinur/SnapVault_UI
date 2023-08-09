import React, { useContext } from "react";
import ImageGallery from "../comps/ImageGallery";
import UploadForm from "../comps/UploadForm";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const Home = () => {
  const { user } = useContext(AUTH_CONTEXT);
  console.log(user);
  
  return (
    <>
      <UploadForm />
      <ImageGallery />
    </>
  );
};

export default Home;
