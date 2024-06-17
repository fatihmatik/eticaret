import Navbar from "./components/navbar/Navbar";
import BigCategories from "./components/Bigcategories/BigCategories";
import Hero from "./components/hero/hero";
// import Footer from "./components/Footer/Footer.js";
import ArrayCategories from "./components/ArrayCategories/ArrayCategories.js";

import { herodata } from "./components/herodata.js";

function App() {
  const textArray = ["EN ÇOK STAN", "orta", "sag"];
  return (
    <>
      <Navbar />
      <div className="flex bg-white justify-between ml-16 mr-16">
        <BigCategories texts={textArray} />
      </div>
      <div className="flex flex-col items-center mt-[64px]">
        <p className="text-[48px] font-bold text-slate-700">Populer</p>
        <Hero images={herodata} />
      </div>
      <div className="flex flex-col items-center mt-[64px]">
        <p className="text-[48px] font-bold text-slate-700">Indirim</p>
        <Hero images={herodata} />
      </div>
      {/* <Footer /> */}
      <ArrayCategories />
    </>
  );
}

export default App;
