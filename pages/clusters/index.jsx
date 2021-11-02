import React from "react";
import PropTypes from "prop-types";
import { getAllClusters } from "../../adapters";
import Layout from "../../layouts/Layout";
import SuperList from "../../components/core/SuperList";

const Clusters = ({ clusters }) => (
  <Layout>
    <SuperList data={clusters} title="Clusters 🌌" parentLink="/clusters" />
  </Layout>
);

Clusters.propTypes = {
  clusters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Clusters.defaultProps = {
  clusters: [],
};

export const getServerSideProps = async () => {
  const clusters = await getAllClusters()
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { clusters },
  };
};

export default Clusters;
