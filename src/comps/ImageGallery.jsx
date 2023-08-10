import React from "react";

const ImageGallery = ({data}) => {

console.log(data);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-2">
      {data?.data.map(el => 
      <div key={el._id} className="shadow-xl">
        <figure>
          <img
            src={el?.display_url}
            alt=""
          />
        </figure>
      </div>)}
   
    </div>
  );
};

export default ImageGallery;
