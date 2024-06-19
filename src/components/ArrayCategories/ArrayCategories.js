import React from "react";

const ArrayCategories = ({ imageURLs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-16">
      {imageURLs.map((url, index) => (
        <img
          key={index}
          className="px-8 py-8"
          style={{ borderRadius: "4rem" }}
          src={url}
          alt={`Placeholder ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ArrayCategories;
