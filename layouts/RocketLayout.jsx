import React, { useState } from "react";
import Head from "next/head";
import { MenuIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useARocket } from "../adapters";
import Loading from "../components/Loading";
import { RocketContext } from "../context/RocketContext";
import { ThemeProvider } from "next-themes";

const RocketLayout = ({ children }) => {
  const router = useRouter();
  const rocketId = router.query.rocket;
  const starId = router.query.star;
  const [starbar, setStarbar] = useState(false);
  const { rocket, isLoading, isError } = useARocket(rocketId);
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center w-full bg-white dark:bg-dark">
        <Loading />
        <span className="text-xl my-4 font-semibold">Loading...</span>
      </div>
    );

  const ListItem = ({ name, slug }) => (
    <Link href={`/rockets/${rocketId}/${slug}`} passHref>
      <li
        className={`${
          router.query.star === slug &&
          "bg-blue-50 border-l-4 border-blue-400 font-bold text-gray-800 dark:text-gray-200 dark:bg-gray-900 dark:bg-opacity-70"
        } cursor-pointer p-4 border-l-4 text-2xl font-normal ease-in border-transparent text-gray-500  hover:bg-blue-50 dark:hover:bg-gray-900 dark:hover:bg-opacity-50 `}
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
    <RocketContext.Provider value={{ rocket }}>
      <div className="relative dark:bg-dark bg-gray-100 min-h-screen">
        <Head>
          <title>{rocket?.title} | CLUSTER</title>
        </Head>
        <div
          style={{ lineHeight: "4rem" }}
          className=" fixed p-4 h-24 w-full bg-white dark:bg-gray-900 shadow-lg z-50  text-5xl flex justify-between items-center"
        >
          <div className="truncate flex">
            <Link href={`/rockets/${rocketId}`} passHref>
              <span className="font-bold hidden lg:block uppercase text-blue-700 dark:text-blue-400 cursor-pointer">
                {rocket.title}&nbsp;
              </span>
            </Link>
            <span className="font-normal text-black dark:text-white">
              &#47;&nbsp;
            </span>

            <span className="font-normal text-black dark:text-white">
              {starId &&
                rocket.stars.filter((star) => star.videoURL === starId)[0]
                  .title}
            </span>
          </div>
          <div className="flex items-center dark:text-white px-4 sm:hidden">
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
            <ul className="overflow-y-auto h-full pb-8">
              {rocket.stars?.map((star) => (
                <ListItem
                  name={star.title}
                  key={star.id}
                  slug={star.videoURL}
                />
              ))}
            </ul>
          </aside>

          <main className="z-0 sm:ml-80 p-12">{children}</main>
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
