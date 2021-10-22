import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { MenuIcon } from "@heroicons/react/solid";
import { useACluster } from "../adapters";
import Loading from "../components/Loading";
import { ClusterContext } from "../context/ClusterContext";

const ClusterLayout = ({ children }) => {
  const router = useRouter();
  const galaxyId = router.query.galaxy;
  const superclusterId = router.query.supercluster;
  const clusterId = router.query.cluster;
  const starId = router.query.star;

  const [starbar, setStarbar] = useState(false);

  const { cluster, isLoading, isError } = useACluster(clusterId);

  const ListItem = ({ name, slug }) => (
    <Link href={`/${superclusterId}/${galaxyId}/${clusterId}/${slug}`} passHref>
      <li
        className={`cursor-pointer p-4 border-l-4 text-2xl font-normal ease-in border-transparent text-gray-600 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-900 dark:hover:bg-opacity-50 ${
          router.query.star === slug &&
          "bg-blue-50 border-l-4 border-blue-400 font-bold  text-gray-900 dark:bg-gray-900 dark:bg-opacity-70"
        }`}
      >
        {name}
      </li>
    </Link>
  );

  ListItem.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
  };

  ListItem.defaultProps = {
    name: "cluster",
    slug: "slug",
  };

  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center w-full bg-white dark:bg-dark">
        <Loading />
      </div>
    );

  return (
    <ClusterContext.Provider>
      <div className="relative dark:bg-dark min-h-screen bg-gray-100">
        <Head>
          <title>{cluster?.title} | CLUSTER</title>
        </Head>
        <div
          style={{ lineHeight: "4rem" }}
          className="p-4 h-24 w-full bg-white dark:bg-gray-900 shadow-lg z-50 fixed text-5xl flex justify-between items-center"
        >
          <div className="truncate flex">
            <Link href={`/${superclusterId}/${galaxyId}/${clusterId}`} passHref>
              <span className="font-bold hidden md:block uppercase text-blue-700 dark:text-blue-400 cursor-pointer">
                {clusterId}&nbsp;
              </span>
            </Link>
            <span className="font-normal text-black dark:text-white">
              &#47;&nbsp;
            </span>
            {starId && (
              <span className="font-normal text-black dark:text-white">
                {
                  cluster.stars.filter((star) => star.videoURL === starId)[0]
                    .title
                }
              </span>
            )}
          </div>

          <div className="flex items-center pl-2 sm:hidden">
            <button
              type="button"
              onClick={() => setStarbar(!starbar)}
              onKeyPress={() => setStarbar(!starbar)}
            >
              <MenuIcon className="w-12 h-12" />
            </button>
          </div>
        </div>
        <div className="pt-24">
          <aside
            className={` ${
              starbar ? "-translate-x-0 " : "-translate-x-full"
            } transform transition w-11/12 backdrop-filter duration-300 ease-in-out sm:translate-x-0 z-40 sm:block sm:w-80 bg-gray-50 dark:bg-dark h-screen fixed dark:light-shadow-xl shadow-xl`}
          >
            {cluster ? (
              <ul className="overflow-y-auto h-full pb-8">
                {cluster.stars?.map((star) => (
                  <ListItem
                    name={star.title}
                    key={star.id}
                    slug={star.videoURL}
                  />
                ))}
              </ul>
            ) : (
              <div className="flex justify-center mt-96 h-full">
                <Loading />
              </div>
            )}
          </aside>

          <main className="z-0 sm:ml-80 p-12 ">{children}</main>
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
