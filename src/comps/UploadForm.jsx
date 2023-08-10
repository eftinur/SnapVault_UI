import axios from "axios";
import React, { useContext, useState } from "react";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // user_data
  const { user } = useContext(AUTH_CONTEXT);

  const Image_Hosting_Token = import.meta.env.VITE_Image_Hosting_Token;

  const url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  // Getting uploaded files from Input Field
  const handleUploads = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {
      // upload files to the storage
      // Appending images in FormData
      const formData = new FormData();
      formData.append("image", selectedFile);

      // Storing Images in Hosting
      axios.post(url, formData).then((image) => {
        console.log(image);
        // Creating New Post Object
        const newPost = {
          display_url: image.data.data.display_url,
          user_email: user.email,
        };

        // Sending Upload Data to the Database
        axios.post("http://localhost:5000/posts", newPost).then((data) => {
          console.log(data.data);
          // Force a Form reset
        });
      });
    }
  };

  return (
    <div className="py-20">
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
        <input onChange={handleUploads} type="file" className="w-full" />
        <div className="mt-5">
          <button type="submit" className="underline">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
