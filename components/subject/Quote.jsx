import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

const Quote = ({ text }) => (
  <div className="border-l-4 m  b-4 border-blue-400 p-2 rounded-lg bg-white shadow-md dark:bg-gray-800 bg-opacity-50 dark:text-gray-300">
    <Markdown>{text}</Markdown>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string,
};

Quote.defaultProps = {
  text: "This will be the **message**",
};

export default Quote;
