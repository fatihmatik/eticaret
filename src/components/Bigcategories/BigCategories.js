import React from "react";

const BigCategories = ({ imagesArray }) => {
  return (
    <div className="flex bg-white justify-between ml-16 mr-16">
      <div className="bg-blue-300 h-24 flex bg-blue justify-between w-full">
        {imagesArray.map((image, index) => (
          <img src={image} key={index} alt={image} />
        ))}
      </div>
    </div>
  );
};

export default BigCategories;
