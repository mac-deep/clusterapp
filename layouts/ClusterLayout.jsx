import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { MenuIcon } from "@heroicons/react/solid";
import { useACluster } from "../adapters";
import Loading from "../components/core/Loading";
import { ClusterContext } from "../context/ClusterContext";
import Starbar from "../components/core/Starbar";
import Layout from "./Layout";

const ClusterLayout = ({ children }) => {
  const router = useRouter();
  const clusterId = router.query.cluster;
  const starId = router.query.star;
  const [starbar, setStarbar] = useState(true);

  const { cluster, isLoading, isError } = useACluster(clusterId);

  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <Layout title="Loading...">
        <div className="h-screen flex flex-col items-center pt-96 w-full bg-white dark:bg-dark">
          <Loading />
          <p className="text-5xl font-light m-4 text-center">
            Spinning <span className="font-bold uppercase">{clusterId} </span>
            🌌 for you!
          </p>
        </div>
      </Layout>
    );

  return (
    <ClusterContext.Provider>
      <div className="relative dark:bg-black bg-gray-100 min-h-screen">
        <div className="flex">
          <Starbar
            className={`fixed top-0 left-0 w-full lg:w-1/4 z-40 h-screen ${
              !starbar && "hidden"
            }`}
            title={cluster.title}
            data={cluster.stars}
            open={starbar}
            close={() => setStarbar(false)}
            parentLink={`/clusters/${clusterId}`}
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
                    cluster.stars.filter((star) => star.videoURL === starId)[0]
                      .title}
                </span>
              </div>
            </div>
            <main className="z-0 p-12">{children}</main>
          </div>
        </div>
      </div>
    </ClusterContext.Provider>
  );
};

ClusterLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

ClusterLayout.defaultProps = {
  children: {},
};

export default ClusterLayout;
