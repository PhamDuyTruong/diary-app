import React from 'react';
import Footer from './Footer';
import { Text } from '../context/Language';

const HomePage = () => (
  <div className="container h-full lg:mt-44 flex flex-col mx-auto">
    <section className="h-3/5 relative">
      <h1 className="text-7xl py-8">
        <Text tid="homeHeader" />
      </h1>
      <h3 className="text-3xl">
        <Text tid="section-1" />
      </h3>
      <img
        src="/img/pics/Banner-Carol.jpg"
        alt=""
        width="650"
        height="500"
        className="absolute right-5 -top-32 hidden xl:block"
      />
    </section>
    <section
      className="flex justify-around text-center h-full w-full bg-opacity-60 
    bg-white-base sm:mt-48 py-8 rounded-3xl flex-wrap"
    >
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-green-light 
      to-green-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0
      sm:h-96"
      >
        <h2 className="text-2xl py-4 text-lila-dark">
          <Text tid="sectionHeader-2" />
        </h2>
        <h3 className="text-xl lg:px-14">
          <Text tid="section-2" />
        </h3>
        <img
          src="/img/pics/Illu1.jpg"
          alt=""
          width="100%"
          className="sm:absolute bottom-2 left-0 right-0 mx-auto w-24 sm:w-44
          xl:w-56"
        />
      </div>
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-lila-light 
      to-lila-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0 sm:h-96"
      >
        <h2 className="text-2xl py-4 text-blue-dark">
          <Text tid="sectionHeader-3" />
        </h2>
        <h3 className="text-xl lg:px-14">
          <Text tid="section-3" />
        </h3>
        <img
          src="/img/pics/Illu2.jpg"
          alt=""
          width="100%"
          height="100%"
          className="sm:absolute bottom-10 left-0 right-0 mx-auto w-24 sm:w-36
          xl:w-52"
        />
      </div>
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-gray-light 
      to-gray-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0 sm:h-96"
      >
        <h2 className="text-2xl py-4 text-gray-dark">
          <Text tid="sectionHeader-4" />
        </h2>
        <h3 className="text-xl lg:px-14">
          <Text tid="section-4" />
        </h3>
        <img
          src="/img/pics/Illu3.jpg"
          alt=""
          width="100%"
          className="sm:absolute bottom-2 left-0 right-0 mx-auto w-24 sm:w-44
          xl:w-56"
        />
      </div>
    </section>
    <Footer />
  </div>
);

export default HomePage;
