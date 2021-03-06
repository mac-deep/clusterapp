import React from "react";
import PropTypes from "prop-types";
import RocketLayout from "../../../layouts/RocketLayout";
import { getARocket } from "../../../adapters/rockets";
import Layout from "../../../layouts/Layout";

const Rocket = ({ rocket }) => (
  <Layout title={rocket.title}>
    <div>{rocket.title}</div>
  </Layout>
);

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

Rocket.PageLayout = RocketLayout;

export default Rocket;
