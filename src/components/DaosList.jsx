import React from "react";
import Daos from "../api/testDaos.json";
import DaoCard from "./DaoCard";

const DaosList = ({ userDAOsMatch }) => {

  return (
      <section id="all-tribunals" className="text-gray-600 body-font">
        <div className="container max-w-7xl px-5 pb-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {userDAOsMatch?.length > 0
              ? userDAOsMatch.map((dao) => (
                  <DaoCard
                    key={dao.id}
                    logo={dao.logo}
                    title={dao.title}
                    desc={dao.desc}
                    slug={dao.slug}
                  />
                ))
              : Daos.map((dao) => (
                  <DaoCard
                    key={dao.id}
                    logo={dao.logo}
                    title={dao.title}
                    desc={dao.desc}
                    slug={dao.slug}
                  />
                ))}
          </div>
        </div>
      </section>
  );
};

export default DaosList;
