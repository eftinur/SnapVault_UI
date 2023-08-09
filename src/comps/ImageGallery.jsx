import React from "react";

const ImageGallery = () => {

  return (
    <div className="container mx-auto grid grid-cols-4 gap-2">
      <div className="shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/6069071/pexels-photo-6069071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </figure>
      </div>
      <div className="shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/6069071/pexels-photo-6069071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </figure>
      </div>
      <div className="shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/6069071/pexels-photo-6069071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </figure>
      </div>
      <div className="shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/6069071/pexels-photo-6069071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default ImageGallery;
