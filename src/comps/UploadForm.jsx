import React, { useState } from "react";

const UploadForm = () => {
  const Image_Hosting_Token = import.meta.env.VITE_Image_Hosting_Token;
  console.log(Image_Hosting_Token);

  const [selectedFile, setSelectedFile] = useState(null);
  const handleUploads = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // upload files to the storage
      // console.log(selectedFile);
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
