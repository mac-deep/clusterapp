import React from "react";
import Head from "next/head";

import PropTypes from "prop-types";
import GalaxyCard from "../../components/SuperCluster/GalaxyCard";
import Title from "../../components/Title";
import { getAllSuperClusters, getAllGalaxiesOf } from "../../adapters";

const Supercluster = ({ galaxies, supercluster }) => (
  <div className="dark:bg-dark bg-gray-100 min-h-screen">
    <Head>
      <title>{supercluster} | CLUSTER</title>
    </Head>
    <Title title={supercluster} />
    <div className="w-full flex justify-center">
      <div className="flex sm:full w-10/12 flex-wrap">
        {galaxies.length !== 0 ? (
          galaxies.map((galaxy) => (
            <GalaxyCard
              title={galaxy.title}
              key={galaxy.id}
              link={`/${supercluster}/${galaxy.slug}`}
              summary={galaxy.summary}
            />
          ))
        ) : (
          <h1>No galaxies found for {supercluster} supercluster</h1>
        )}
      </div>
    </div>
  </div>
);

Supercluster.propTypes = {
  galaxies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  supercluster: PropTypes.string,
};

Supercluster.defaultProps = {
  galaxies: [],
  supercluster: "supercluster",
};

export const getStaticProps = async ({ params }) => {
  const galaxies = await getAllGalaxiesOf(params.supercluster)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      galaxies,
      supercluster: params.supercluster,
    },
  };
};

export const getStaticPaths = async () => {
  const superclusters = await getAllSuperClusters()
    .then((data) => data)
    .catch((err) => err);
  const paths = superclusters.map((supercluster) => ({
    params: { supercluster: supercluster.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Supercluster;
