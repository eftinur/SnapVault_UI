import React from "react";

const ImageGallery = ({data}) => {

  return (
    <div className="container min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4 py-12">
      {data?.data.map(el => 
      <div key={el._id} className="image_wrapper shadow-xl">
        <div className="image_wrapper w-full h-full">
          <img
            src={el?.display_url}
            alt=""
            className="w-full h-full block object-cover"
          />
        </div>
      </div>)}
   
    </div>
  );
};

export default ImageGallery;
