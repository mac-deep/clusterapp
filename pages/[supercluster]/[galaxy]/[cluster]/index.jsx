import React from "react";
import PropTypes from "prop-types";
import Course from "../../../../layouts/Course";
import { getACluster, getAllClusters } from "../../../../adapters/clusters";

const Cluster = ({ cluster }) => <div>Cluster of {cluster.title}</div>;

Cluster.PageLayout = Course;

Cluster.propTypes = {
  cluster: PropTypes.string,
};

Cluster.defaultProps = {
  cluster: "cluster",
};

export const getStaticProps = async ({ params }) => {
  const cluster = await getACluster(params.cluster)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      supercluster: params.supercluster,
      cluster,
    },
  };
};

export const getStaticPaths = async () => {
  const clusters = await getAllClusters()
    .then((data) => data)
    .catch((err) => err);
  const paths = clusters.map((cluster) => ({
    params: {
      cluster: cluster.slug,
      galaxy: cluster.galaxy.slug,
      supercluster: cluster.supercluster.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Cluster;
