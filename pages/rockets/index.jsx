import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { getAllRockets } from "../../adapters/rockets";

function Rockets({ rockets }) {
  return (
    <div>
      {rockets.map((rocket) => (
        <Link href={`/rockets/${rocket.slug}`} key={rocket.id} passHref>
          <h1>{rocket.title}</h1>
        </Link>
      ))}
    </div>
  );
}

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
  return {
    props: { rockets },
  };
};

export default Rockets;
