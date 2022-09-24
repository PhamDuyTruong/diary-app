import React from "react";
import Footer from "./Footer";
import { Text } from "../context/Language";

const HomePage = () => {
  return (
    <div className="container h-full lg:mt-44 flex flex-col mx-auto">
      <section className="h-3/5 relative">
        <h1 className="text-7xl py-8">
          <Text tid="homeHeader" />
        </h1>
        <h3 className="text-3xl">
          <Text tid="section-1" />
        </h3>
        <img
          src="../assets/img/pics/Kanji.png"
          alt=""
          width="150"
          className="absolute right-80 top-96 hidden xl:block"
        />
        <img
          src="../assets/img/pics/takoyaki.png"
          alt=""
          width="550"
          className="absolute right-0 -top-32 hidden xl:block"
        />
        <h2 className="text-center mt-24 text-4xl font-thin">
          <img
            src="../assets/img/pics/good-luck.png"
            alt="good luck"
            width="50%"
          />
        </h2>
      </section>
      <section
        className="flex justify-around text-center h-full w-full bg-opacity-60 
    bg-white-base sm:mt-48 py-8 rounded-3xl flex-wrap"
      >
        <div
          className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-green-light to-green-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0
      sm:h-96"
        >
          <h2 className="text-2xl py-4 text-lila-dark">
            <Text tid="sectionHeader-2" />
          </h2>
          <h3 className="text-xl lg:px-14">
            <Text tid="section-2" />
          </h3>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
