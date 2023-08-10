import React from "react";
import ImageGallery from "../comps/ImageGallery";
import UploadForm from "../comps/UploadForm";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const getData = () => {
  return axios.get(`http://localhost:5000/posts?user_email=tarek@gmail.com`);
}

const Home = () => {  
  // Tanstack Query to handle API calls
  const {isLoading, data, refetch} = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  })
  
  return (
    <>
      <UploadForm refetch={refetch}/>
      <ImageGallery data={data}/>
    </>
  );
};

export default Home;
