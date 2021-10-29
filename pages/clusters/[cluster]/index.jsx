import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../layouts/Layout";
import { getACluster } from "../../../adapters";
import ClusterLayout from "../../../layouts/ClusterLayout";

const Cluster = ({ cluster }) => (
  <Layout title={cluster.title}>
    <div>{cluster.title}</div>
  </Layout>
);

Cluster.propTypes = {
  cluster: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      stars: PropTypes.objectOf(
        PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string,
        })
      ),
    })
  ),
};

Cluster.defaultProps = {
  cluster: {
    title: "cluster name",
    stars: {},
  },
};

export const getServerSideProps = async ({ params }) => {
  const cluster = await getACluster(params.cluster)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      cluster,
    },
  };
};

Cluster.PageLayout = ClusterLayout;

export default Cluster;
