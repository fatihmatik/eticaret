import React from "react";

const BigCategories = ({ texts }) => {
  return (
    <div className={`bg-blue-500 h-24 flex bg-blue justify-between w-full`}>
      {texts.map((text, index) => (
        <span
          key={index}
          className="text-2xl font-bold text-slate-900 hover:text-gray-700 mx-[128px] h-24 flex items-center justify-center"
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default BigCategories;
