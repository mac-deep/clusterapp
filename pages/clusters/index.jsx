import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { getAllClusters } from "../../adapters";
import Layout from "../../layouts/Layout";

const Clusters = ({ clusters }) => (
  <Layout>
    {clusters.map((cluster) => (
      <Link href={`/clusters/${cluster.slug}`} key={cluster.id} passHref>
        <h1>{cluster.title}</h1>
      </Link>
    ))}
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
