import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
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
            className={`fixed top-0 left-0 lg:w-1/4 h-screen transform transition duration-300 ease-in-out z-40 w-9/12 bg-gray-50 dark:bg-dark dark:light-shadow-xl shadow-xl ${
              starbar ? "translate-x-0" : "-translate-x-full"
            }`}
            title={cluster.title}
            data={cluster.stars}
            isOpen={starbar}
            onClose={() => setStarbar(!starbar)}
            parentLink={`/clusters/${clusterId}`}
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
