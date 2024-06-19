import Navbar from "./components/navbar/Navbar";
import BigCategories from "./components/Bigcategories/BigCategories";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer/Footer.js";
import ArrayCategories from "./components/ArrayCategories/ArrayCategories.js";

import { herodata } from "./components/herodata.js";
import { randomElements, remainingElements } from "./utils/imageUtils.js"; // get the randomly selected image urls

function App() {
  return (
    <>
      <Navbar />
      <BigCategories imagesArray={randomElements} />

      <div className="flex flex-col items-center mt-[64px]">
        <p className="text-[48px] font-bold text-slate-700">Populer</p>
        <Hero images={herodata} />
      </div>
      <div className="flex flex-col items-center mt-[64px]">
        <p className="text-[48px] font-bold text-slate-700">Indirim</p>
        <Hero images={herodata} />
      </div>

      <Footer />
      <ArrayCategories imageURLs={remainingElements} />
    </>
  );
}

export default App;
