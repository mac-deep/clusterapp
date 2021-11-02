import React from "react";
import ThemeChanger from "../components/core/ThemeChanger";
import SuperTitle from "../components/Home/SuperTitle";
import Layout from "../layouts/Layout";

const Home = () => (
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
        <SuperTitle title="Clusters 🌌" link="/clusters" />
        <SuperTitle title="Rockets 🚀" link="/rockets" />
      </div>
    </div>
  </Layout>
);

export default Home;
