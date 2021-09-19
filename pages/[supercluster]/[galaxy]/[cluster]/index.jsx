import React from "react";
import PropTypes from "prop-types";
import Course from "../../../../layouts/Course";

const Cluster = ({ cluster }) => <div>Cluster of {cluster.title}</div>;

Cluster.PageLayout = Course;

Cluster.propTypes = {
  cluster: PropTypes.string,
};

Cluster.defaultProps = {
  cluster: "cluster",
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://clustercms.herokuapp.com/clusters/${params.cluster}`
  );
  const data = await res.json();
  return {
    props: {
      supercluster: params.supercluster,
      cluster: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://clustercms.herokuapp.com/clusters");
  const data = await res.json();
  const paths = data.map((cluster) => ({
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
