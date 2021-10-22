import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const GalaxyCard = ({ title, link, summary }) => (
  <div className="sm:w-1/2 xl:w-1/3 flex flex-col justify-start p-4">
    <div className="p-8 shadow-md bg-white dark:bg-transparent hover:shadow-lg dark:light-shadow-md rounded-2xl dark:hover:light-shadow-xl dark:border-gray-800 h-full cursor-pointer">
      <Link href={link} passHref>
        <a>
          <div className="flex justify-center mb-3 items-center">
            <span className="text-6xl font-medium dark:text-white">
              {title}
            </span>
          </div>
          <div className="mt-2 text-gray-700 text-base text-center dark:text-gray-400">
            {summary.length !== 0 && summary}
          </div>
        </a>
      </Link>
    </div>
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
