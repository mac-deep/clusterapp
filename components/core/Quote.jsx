import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

const Quote = ({ text }) => (
  <div className="p-4 rounded-2xl text-2xl leading-10 bg-white shadow-lg dark:bg-gray-900 bg-opacity-50 dark:text-gray-400">
    <Markdown>{`👉 ${text}`}</Markdown>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string,
};

Quote.defaultProps = {
  text: "This will be the **message**",
};

export default Quote;
