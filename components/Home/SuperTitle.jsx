import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const SuperTitle = ({ title, link }) => (
  <div className="w-full md:w-1/2 text-center">
    <Link href={link}>
      <div className="m-4 p-8 md:p-16  shadow-2xl dark:light-shadow-2xl transition-shadow rounded-3xl cursor-pointer">
        <h1 className="text-6xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
      </div>
    </Link>
  </div>
);

SuperTitle.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

SuperTitle.defaultProps = {
  title: "Rocket",
  link: "link",
};

export default SuperTitle;
