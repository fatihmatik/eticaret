// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import productsArr from "../utils/productsArr";
import Bar from "./Bar";

const ProductDetailPage = () => {
  let { productId } = useParams();
  let product = productsArr[productId];

  return (
    <div className="bg-gray-100 p-4 flex">
      <div className="w-1/3 h-[600px] overflow-hidden p-[4px] bg-slate-900 rounded-[12px] ">
        <img
          className="object-cover w-full h-full rounded-[8px]"
          src={product[0]}
          alt=""
        />
      </div>

      <div className="ml-4 w-2/3">
        <h1 className="font-bold text-4xl">{product[1]}</h1>
        <div className="w-1/3 my-2">
          <Bar />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[8px] my-2"
          onClick={() => {
            console.log("");
          }}
        >
          Sepete Ekle
        </button>

        <div className="w-1/3 p-4 mt-4 rounded-[16px]">
          <p className="font-bold text-4xl text-green-500">{product[4]}</p>
        </div>
        <div className="bg-gray-200 w-1/3 h-[256px] p-4 mt-4 rounded-[16px] overflow-hidden ">
          <p className="overflow-y-auto max-h-[256px]">{product[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
