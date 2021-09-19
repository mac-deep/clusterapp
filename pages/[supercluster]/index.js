import React from "react";
import GalaxyCard from "../../components/GalaxyCard";
import Title from "../../components/Title";

const Supercluster = ({ galaxies, supercluster, clusters }) => {
  return (
    <div>
      <Title title={galaxies[0].supercluster.title} />
      <div className="w-full flex justify-center">
        <div className="flex sm:full w-10/12  flex-wrap">
          {galaxies.map((galaxy) => (
            <GalaxyCard
              title={galaxy.title}
              key={galaxy._id}
              link={`/${supercluster}/${galaxy.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const allGalaxy = await fetch(`http://localhost:1337/galaxies`);
  const galaxyData = await allGalaxy.json();
  const galaxies = galaxyData.filter(
    (galaxy) => galaxy.supercluster.slug === params.supercluster
  );
  return {
    props: {
      galaxies: galaxies,
      supercluster: params.supercluster,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/superclusters");
  const data = await res.json();
  const paths = data.map((supercluster) => {
    return {
      params: { supercluster: supercluster.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Supercluster;
