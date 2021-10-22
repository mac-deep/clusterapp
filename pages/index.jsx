import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { getAllRockets, getAllSuperClusters } from "../adapters";
import SuperClusterCard from "../components/Home/SuperClusterCard";
import RocketCard from "../components/Home/RocketCard";
import ThemeChanger from "../components/ThemeChanger";

export default function Home({ superclusters, rockets }) {
  return (
    <div className="dark:bg-dark min-h-screen ">
      <Head>
        <title>CLUSTER</title>
        <meta name="description" content="Universe of Knowledge" />
        <link rel="icon" href="/cluster.ico" />
      </Head>
      {ThemeChanger()}
      <h1 className="text-blue-700 text-center text-9xl uppercase pt-8 font-bold">
        Cluster
      </h1>
      <div className="p-8 mt-16 w-full">
        <div className="flex flex-wrap h-full">
          <SuperClusterCard title="SuperClusters🌌" data={superclusters} />
          <RocketCard title="Rockets🚀" data={rockets} />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  superclusters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Home.defaultProps = {
  superclusters: [],
  rockets: [],
};

export const getServerSideProps = async () => {
  const superclusters = await getAllSuperClusters()
    .then((data) => data)
    .catch((err) => err);
  const rockets = await getAllRockets()
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { superclusters, rockets },
  };
};
