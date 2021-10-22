import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import ClusterCard from "../../../components/SuperCluster/ClusterCard";
import Title from "../../../components/Title";
import { getAllClustersOf } from "../../../adapters";

const Galaxy = ({ clusters, supercluster, galaxy, galaxyTitle }) => (
  <div className="min-h-screen bg-gray-100 dark:bg-dark bg-fixed">
    <Head>
      <title>{galaxyTitle} | CLUSTER</title>
    </Head>
    <Title title={galaxyTitle} />
    <div className="w-full flex justify-center">
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
          <h1>No clusters found for {galaxyTitle} galaxy!</h1>
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

export const getServerSideProps = async ({ params }) => {
  const clusters = await getAllClustersOf(params.galaxy);
  return {
    props: {
      supercluster: params.supercluster,
      galaxy: params.galaxy,
      galaxyTitle: clusters[0].galaxy.title,
      clusters,
    },
  };
};

export default Galaxy;
