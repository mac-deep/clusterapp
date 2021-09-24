import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { getAStar, getACluster } from "../adapters";
import Loading from "../components/Loading";

const Course = ({ children }) => {
  const router = useRouter();
  const superclusterId = router.query.supercluster;
  const galaxyId = router.query.galaxy;
  const clusterId = router.query.cluster;
  const starId = router.query.star;

  const [cluster, setCluster] = useState(null);
  const [title, setTitle] = useState("");
  const [starbar, setStarbar] = useState(false);

  useEffect(
    async () =>
      getACluster(clusterId)
        .then((data) => setCluster(data))
        .catch((err) => err),

    getAStar(starId)
      .then((data) => setTitle(data.title))
      .catch((err) => err),
    [starId]
  );

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

  return (
    <div className="relative dark:bg-black bg-gray-100">
      <div
        style={{ lineHeight: "4rem" }}
        className="p-4 h-24 w-full bg-white dark:bg-gray-900 shadow-lg z-50 fixed text-5xl flex justify-between items-center"
      >
        <div className="truncate flex">
          <Link href={`/${superclusterId}/${galaxyId}/${clusterId}`} passHref>
            <span className="font-bold hidden lg:block uppercase text-blue-700 dark:text-blue-400 cursor-pointer">
              {clusterId}&nbsp;
            </span>
          </Link>
          <span className="font-normal text-black dark:text-white">
            &#47;&nbsp;
          </span>
          {title && (
            <span className="font-normal text-black dark:text-white">
              {title}
            </span>
          )}
        </div>
        <div className="h-16 hidden pr-4 lg:flex items-center text-gray-400 border-gray-300 dark:border-gray-700 border-1 rounded-2xl">
          <div className="w-16 h-16 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            placeholder={`Search in ${cluster?.title}`}
            className="bg-transparent text-2xl w-full outline-none py-2 "
          />
        </div>
        <div className="flex items-center pl-2 sm:hidden">
          <button
            type="button"
            onClick={() => setStarbar(!starbar)}
            onKeyPress={() => setStarbar(!starbar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
            <ul className="overflow-y-scroll h-full pb-8">
              {cluster.stars?.map((star) => (
                <ListItem
                  name={star.title}
                  key={star.slug}
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

        <main className="z-0 sm:ml-80 min-h-screen bg-gray-100 p-12 dark:bg-dark">
          {children}
        </main>
      </div>
    </div>
  );
};

Course.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

Course.defaultProps = {
  children: {},
};

export default Course;
