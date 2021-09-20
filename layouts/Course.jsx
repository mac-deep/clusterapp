import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

const Course = ({ children }) => {
  const router = useRouter();
  const superclusterId = router.query.supercluster;
  const galaxyId = router.query.galaxy;
  const clusterId = router.query.cluster;
  const starId = router.query.star;

  const [cluster, setCluster] = useState(null);
  const [starbar, setStarbar] = useState(false);
  const preLoad = async () => {
    fetch(`https://clustercms.herokuapp.com/clusters/${clusterId}`)
      .then((res) => res.json())
      .then((data) => setCluster(data));
  };

  useEffect(() => preLoad(), []);

  const ListItem = ({ name, slug }) => (
    <Link href={`/${superclusterId}/${galaxyId}/${clusterId}/${slug}`} passHref>
      <li
        className={`cursor-pointer p-4 border-l-4 text-2xl font-light ease-in border-transparent text-gray-600 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800 ${
          router.query.star === slug &&
          "bg-blue-50 border-l-4 border-blue-400 font-medium  text-gray-900 dark:bg-gray-800"
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
        style={{ lineHeight: "3rem" }}
        className="p-6 w-full bg-white dark:bg-gray-900 shadow-xl z-50 fixed text-5xl flex justify-between items-center"
      >
        <div>
          <Link href={`/${superclusterId}/${galaxyId}/${clusterId}`} passHref>
            <span className="font-bold uppercase text-blue-700 dark:text-blue-400 cursor-pointer">
              {clusterId}&nbsp;
            </span>
          </Link>
          <span className="font-normal text-black dark:text-white">
            &#47;&nbsp;{starId}
          </span>
        </div>
        <div className="flex items-center sm:hidden">
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
          } transform transition w-full backdrop-filter duration-300 ease-in-out sm:translate-x-0 z-40 sm:block sm:w-80 bg-gray-50 dark:bg-gray-900 h-screen fixed shadow-xl`}
        >
          {cluster ? (
            <ul className="overflow-y-scroll h-full pb-8">
              {cluster.stars?.map((star) => (
                <ListItem name={star.title} key={star.slug} slug={star.slug} />
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div
                style={{ borderTopColor: "transparent" }}
                className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"
              />
            </div>
          )}
        </aside>

        <main className="z-0 sm:ml-80 min-h-screen bg-gray-100 p-12 dark:bg-black">
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
