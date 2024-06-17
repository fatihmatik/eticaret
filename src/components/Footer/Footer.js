import React from "react";
import { popularBrands, populerSayfalar } from "./footershopsData";
const Footer = () => {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const chunkSize = 25;
  const brandChunks = chunkArray(popularBrands, chunkSize);

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Popüler Marka ve Mağazalar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-16">
              {brandChunks.map((chunk, columnIndex) => (
                <ul key={columnIndex} className="">
                  {chunk.map((brand, index) => (
                    <li
                      key={index}
                      className="flex whitespace-nowrap gap-[64px]"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Popüler Sayfalar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-16">
              {brandChunks.map((chunk, columnIndex) => (
                <ul key={columnIndex} className="">
                  {chunk.map((brand, index) => (
                    <li
                      key={index}
                      className="flex whitespace-nowrap gap-[64px]"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
