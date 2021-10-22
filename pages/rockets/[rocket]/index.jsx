import React from "react";
import PropTypes from "prop-types";
import RocketLayout from "../../../layouts/RocketLayout";
import { getARocket } from "../../../adapters/rockets";

function Rocket({ rocket }) {
  return <div>{rocket.title}</div>;
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.objectOf(
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

Rocket.defaultProps = {
  rocket: {
    title: "Rocket name",
    stars: {},
  },
};

Rocket.PageLayout = RocketLayout;

export const getServerSideProps = async ({ params }) => {
  const rocket = await getARocket(params.rocket)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: {
      rocket,
    },
  };
};
