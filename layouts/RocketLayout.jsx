import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useARocket } from "../adapters";
import Loading from "../components/core/Loading";
import Starbar from "../components/core/Starbar";
import { RocketContext } from "../context/RocketContext";
import Layout from "./Layout";

const RocketLayout = ({ children }) => {
  const router = useRouter();
  const rocketId = router.query.rocket;
  const [starbar, setStarbar] = useState(true);
  const { rocket, isLoading, isError } = useARocket(rocketId);

  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <Layout title="Loading...">
        <div className="h-screen flex flex-col items-center pt-96 w-full bg-white dark:bg-dark">
          <Loading />
          <p className="text-5xl font-light my-4 text-center">
            Launching <span className="font-bold">{rocketId}</span> 🚀 for
            you...
          </p>
        </div>
      </Layout>
    );

  return (
    <RocketContext.Provider value={{ rocket }}>
      <div className="relative dark:bg-dark bg-gray-100 min-h-screen">
        <div className="flex">
          <Starbar
            className={`fixed top-0 left-0 lg:w-1/4 h-screen transform transition duration-300 ease-in-out z-40 w-9/12 bg-gray-50 dark:bg-dark dark:light-shadow-xl shadow-xl ${
              starbar ? "translate-x-0" : "-translate-x-full"
            }`}
            title={rocket.title}
            data={rocket.stars}
            isOpen={starbar}
            onClose={() => setStarbar(!starbar)}
            parentLink={`/rockets/${rocketId}`}
          />
          <div
            className={`flex flex-col flex-1 ${
              starbar ? "hidden lg:flex lg:ml-1/4" : "block"
            } `}
          >
            <main className="z-0 transform ease-in-out transition duration-300 p-8 md:p-12 flex justify-center">
              {children}
            </main>
          </div>
        </div>
      </div>
    </RocketContext.Provider>
  );
};

RocketLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

RocketLayout.defaultProps = {
  children: {},
};

export default RocketLayout;
