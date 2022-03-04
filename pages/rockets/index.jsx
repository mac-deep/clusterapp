import React from "react";
import PropTypes from "prop-types";
import { getAllRockets } from "../../adapters/rockets";
import Layout from "../../layouts/Layout";
import SuperList from "../../components/core/SuperList";

const Rockets = ({ rockets }) => (
  <Layout>
    <SuperList data={rockets} title="Rockets🚀" parentLink="/rockets" />
  </Layout>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Rockets.defaultProps = {
  rockets: [],
};

export const getServerSideProps = async () => {
  const rockets = await getAllRockets()
    .then((data) => data)
    .catch((err) => err);

  console.log(rockets);
  return {
    props: { rockets },
  };
};

export default Rockets;
