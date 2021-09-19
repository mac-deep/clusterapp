import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ClusterCard from "../../../components/ClusterCard";
import Title from "../../../components/Title";

const Galaxy = ({ clusters, supercluster, galaxy }) => {
  return (
    <div>
      <Title title={clusters[0].galaxy.title} />
      <div className="w-full flex justify-center">
        <div className="flex sm:full w-10/12 flex-wrap">
          {clusters.map((cluster) => (
            <ClusterCard
              summary={cluster.summary}
              key={cluster.id}
              title={cluster.title}
              link={`/${supercluster}/${galaxy}/${cluster.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const allCluster = await fetch(`http://localhost:1337/clusters`);
  const clusterData = await allCluster.json();
  const clusters = clusterData.filter(
    (cluster) => cluster.galaxy.slug === params.galaxy
  );
  return {
    props: {
      supercluster: params.supercluster,
      galaxy: params.galaxy,
      clusters: clusters,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/galaxies");
  const data = await res.json();
  const paths = data.map((galaxy) => {
    return {
      params: { galaxy: galaxy.slug, supercluster: galaxy.supercluster.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Galaxy;
