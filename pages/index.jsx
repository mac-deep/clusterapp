import React from "react";
import PropTypes from "prop-types";
import { getAllClusters, getAllRockets } from "../adapters";
import ThemeChanger from "../components/core/ThemeChanger";
import SuperList from "../components/Home/SuperList";
import Layout from "../layouts/Layout";

const Home = ({ clusters, rockets }) => (
  <Layout title="CLUSTER">
    <div className="dark:bg-dark bg-gray-50 min-h-screen">
      <ThemeChanger />
      <h1 className="text-blue-700 dark:text-blue-300 text-center text-9xl uppercase pt-8 font-bold">
        Cluster
      </h1>
      <h4 className="text-blue-700 dark:text-white text-center text-5xl font-extralight">
        Universe of Knowledge
      </h4>
      <div className="p-8 mt-16 w-full flex">
        <SuperList title="Clusters" parentLink="/clusters" data={clusters} />
        <SuperList title="Rockets 🚀" parentLink="/rockets" data={rockets} />
      </div>
    </div>
  </Layout>
);

Home.propTypes = {
  clusters: PropTypes.arrayOf(
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
  clusters: [],
  rockets: [],
};

export const getServerSideProps = async () => {
  const clusters = await getAllClusters()
    .then((data) => data.slice(0, 6))
    .catch((err) => err);
  const rockets = await getAllRockets()
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { clusters, rockets },
  };
};

export default Home;
