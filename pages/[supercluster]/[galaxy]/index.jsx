import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import ClusterCard from "../../../components/SuperCluster/ClusterCard";
import Title from "../../../components/Title";
import { getAllGalaxies } from "../../../adapters/galaxies";
import { getAllClustersOf } from "../../../adapters/clusters";

const Galaxy = ({ clusters, supercluster, galaxy }) => (
  <div className="min-h-screen bg-gray-100 dark:bg-dark">
    <Head>
      <title>{galaxy} | CLUSTER</title>
    </Head>
    <Title title={galaxy} />
    <div className="w-full flex justify-center ">
      <div className="flex sm:full w-10/12 flex-wrap">
        {clusters.length !== 0 ? (
          clusters.map((cluster) => (
            <ClusterCard
              cover={
                cluster.cover.formats.medium?.url ||
                cluster.cover.formats.small.url
              }
              category={cluster.galaxy.title}
              summary={cluster.summary}
              key={cluster.id}
              title={cluster.title}
              link={`/${supercluster}/${galaxy}/${cluster.slug}`}
            />
          ))
        ) : (
          <h1>No clusters found for {galaxy} galaxy!</h1>
        )}
      </div>
    </div>
  </div>
);

Galaxy.propTypes = {
  clusters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  supercluster: PropTypes.string,
  galaxy: PropTypes.string,
};

Galaxy.defaultProps = {
  clusters: [],
  supercluster: "SuperCluster",
  galaxy: "Galaxy",
};

export const getStaticProps = async ({ params }) => {
  const clusters = await getAllClustersOf(params.galaxy);
  return {
    props: {
      supercluster: params.supercluster,
      galaxy: params.galaxy,
      clusters,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllGalaxies()
    .then((data) =>
      data.map((galaxy) => ({
        params: { galaxy: galaxy.slug, supercluster: galaxy.supercluster.slug },
      }))
    )
    .catch((err) => err);

  return {
    paths,
    fallback: false,
  };
};

export default Galaxy;
