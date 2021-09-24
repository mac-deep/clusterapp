import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const GalaxyCard = ({ title, link, summary }) => (
  <div className="sm:w-1/2 xl:w-1/3 flex flex-col justify-start p-4">
    <Link href={link} passHref>
      <div className="p-4 shadow-xl rounded-lg  border-1  dark:hover:light-shadow-lg dark:border-gray-800 h-full cursor-pointer">
        <div className="flex justify-center mb-3 items-center">
          <span className="text-5xl font-medium">{title}</span>
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          {summary.length !== 0 && summary}
        </div>
      </div>
    </Link>
  </div>
);

GalaxyCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  summary: PropTypes.string,
};

GalaxyCard.defaultProps = {
  title: "title",
  link: "title",
  summary: "Summary of this Galaxy",
};

export default GalaxyCard;
