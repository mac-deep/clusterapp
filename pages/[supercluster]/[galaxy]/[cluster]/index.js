import React from "react";
import Course from "../../../../layouts/Course";

const Cluster = ({ cluster }) => {
  return <div>Cluster of {cluster.title}</div>;
};

Cluster.PageLayout = Course;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/clusters/${params.cluster}`);
  const data = await res.json();
  return {
    props: {
      supercluster: params.supercluster,
      cluster: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/clusters");
  const data = await res.json();
  const paths = data.map((cluster) => {
    return {
      params: {
        cluster: cluster.slug,
        galaxy: cluster.galaxy.slug,
        supercluster: cluster.supercluster.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Cluster;
