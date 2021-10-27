import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => (
  <h1 className="font-bold w-full dark:text-white text-6xl text-center py-8">
    {title}
  </h1>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "title",
};

export default Title;
