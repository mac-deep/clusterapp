import React from "react";
import PropTypes from "prop-types";
import GalaxyCard from "../../components/GalaxyCard";
import Title from "../../components/Title";

const Supercluster = ({ galaxies, supercluster }) => (
  <div>
    <Title title={supercluster} />
    <div className="w-full flex justify-center">
      <div className="flex sm:full w-10/12  flex-wrap">
        {galaxies.length !== 0 ? (
          galaxies.map((galaxy) => (
            <GalaxyCard
              title={galaxy.title}
              key={galaxy.id}
              link={`/${supercluster}/${galaxy.slug}`}
            />
          ))
        ) : (
          <h1>No galaxies found for {supercluster} supercluster</h1>
        )}
      </div>
    </div>
  </div>
);

Supercluster.propTypes = {
  galaxies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  supercluster: PropTypes.string,
};

Supercluster.defaultProps = {
  galaxies: [],
  supercluster: "supercluster",
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://clustercms.herokuapp.com/galaxies`);
  const data = await res.json();
  const galaxies = data.filter(
    (galaxy) => galaxy.supercluster.slug === params.supercluster
  );
  return {
    props: {
      galaxies,
      supercluster: params.supercluster,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://clustercms.herokuapp.com/superclusters");
  const data = await res.json();
  const paths = data.map((supercluster) => ({
    params: { supercluster: supercluster.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Supercluster;
