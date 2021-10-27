import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/outline";
import { useARocket } from "../adapters";
import Loading from "../components/core/Loading";
import Starbar from "../components/core/Starbar";
import { RocketContext } from "../context/RocketContext";
import Layout from "./Layout";

const RocketLayout = ({ children }) => {
  const router = useRouter();
  const rocketId = router.query.rocket;
  const starId = router.query.star;
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
      <div className="relative dark:bg-black bg-gray-100 min-h-screen">
        <div className="flex">
          <Starbar
            className={`fixed top-0 left-0 w-full lg:w-1/4 z-40 h-screen ${
              !starbar && "hidden"
            }`}
            title={rocket.title}
            data={rocket.stars}
            open={starbar}
            close={() => setStarbar(false)}
            parentLink={`/rockets/${rocketId}`}
          />
          <div
            className={`flex flex-col flex-1 ${
              starbar ? "hidden lg:flex lg:ml-1/4" : "block"
            } `}
          >
            <div
              style={{ lineHeight: "4rem" }}
              className="relative p-4 h-24 w-full bg-white dark:bg-black text-black dark:text-white shadow-lg dark:light-shadow-lg z-50 text-5xl flex items-center"
            >
              <div className="flex items-center mr-4">
                <button
                  type="button"
                  onClick={() => setStarbar(!starbar)}
                  onKeyPress={() => setStarbar(!starbar)}
                >
                  <MenuIcon className="w-12 h-12" />
                </button>
              </div>
              <div className="truncate flex">
                <span className="font-normal">
                  {starId &&
                    rocket.stars.filter((star) => star.videoURL === starId)[0]
                      .title}
                </span>
              </div>
            </div>
            <main className="z-0 p-12">{children}</main>
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
