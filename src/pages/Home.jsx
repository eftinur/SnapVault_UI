import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Hero from "../comps/Hero";
import ImageGallery from "../comps/ImageGallery";
import UploadForm from "../comps/UploadForm";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

/*
1.  Input field customization
2.  Image Download, Delete & Full screen view
3.  custom mouse curosor on Image Hover
*/

const Home = () => {
  const { user } = useContext(AUTH_CONTEXT);

  const getData = () => {
    return axios.get(`http://localhost:5000/posts?user_email=${user?.email}`);
  };
  // Tanstack Query to handle API calls
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });

  return (
    <>
      <Hero />
      <UploadForm refetch={refetch} />
      <ImageGallery data={data} />
    </>
  );
};

export default Home;
