import React from "react";

const ArrayCategories = () => {
  const imageURLs = [
    "./images/placeholder1.png",
    "./images/placeholder2.png",
    "./images/placeholder3.png",
    "./images/placeholder4.png",
    "./images/placeholder5.png",
    "./images/placeholder6.png",
  ];

  //   const getRandomIndices = (length, count) => {
  //     const indices = [];
  //     while (indices.length < count) {
  //       const randomIndex = Math.floor(Math.random() * length);
  //       if (!indices.includes(randomIndex)) {
  //         indices.push(randomIndex);
  //       }
  //     }
  //     return indices;
  //   };

  //   // Get 3 random indices
  //   const randomIndices = getRandomIndices(imageURLs.length, 3);

  //   // Get image URLs corresponding to the random indices
  //   selectedImages = randomIndices.map((index) => imageURLs[index]);

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
