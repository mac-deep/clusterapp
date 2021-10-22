import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import GalaxyCard from "../../components/SuperCluster/GalaxyCard";
import Title from "../../components/Title";
import { getAllGalaxiesOf } from "../../adapters";

const Supercluster = ({ galaxies, supercluster, superclusterTitle }) => (
  <div className="dark:bg-dark bg-gray-100 min-h-screen bg-fixed">
    <Head>
      <title>{superclusterTitle} | CLUSTER</title>
    </Head>
    <Title title={superclusterTitle} />
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
          <h1>No galaxies found for {superclusterTitle} supercluster</h1>
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
  superclusterTitle: PropTypes.string,
};

Supercluster.defaultProps = {
  galaxies: [],
  supercluster: "supercluster",
  superclusterTitle: "supercluster",
};

export const getServerSideProps = async ({ params }) => {
  const galaxies = await getAllGalaxiesOf(params.supercluster)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      galaxies,
      superclusterTitle: galaxies[0].supercluster.title,
      supercluster: params.supercluster,
    },
  };
};

export default Supercluster;
