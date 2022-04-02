import React from "react";
import Daos from "./daos";

const AllDaos = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container max-w-7xl px-5 pt-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
               All Daos
              </h1>
              <div className="h-1 w-20 bg-gold rounded"></div>
            </div>
          </div>
        </div>
      </section>
      <Daos />
    </>
  );
};

export default AllDaos;
