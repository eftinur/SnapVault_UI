import axios from "axios";
import React, { useContext, useState } from "react";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const UploadForm = ({ refetch }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  // user_data
  const { user } = useContext(AUTH_CONTEXT);

  // Hosting Credentials
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

          refetch(); // refetching data from API by Lifting State Up with TanStack Query
          // Force Form reset
        });
      });
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="w-full lg:w-2/4 mx-auto py-12 bg-white shadow-xl px-2">
        <h2 className="text-2xl font-bold text-center capitalize mb-6">
          Upload your photos
        </h2>

        <form onSubmit={handleSubmit} className="w-full gap-4 text-center py-2">
          <input
            onChange={handleUploads}
            type="file"
            accept="image/*"
            className="w-fit block mx-auto border-b py-2 mb-4"
          />
          <p className="text-xs mb-4">JPG, PNG, GIF files are allowed</p>
          <>
            <button type="submit" className="">
              Upload
            </button>
          </>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
