import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const SuperList = ({ title, data, parentLink }) => (
  <div className="w-full h-full lg:w-1/3 sm:w-1/2 ">
    <div className="m-8 p-8 shadow-2xl dark:light-shadow-2xl transition-shadow rounded-3xl">
      <h1 className="text-6xl font-semibold mb-8 text-gray-800 dark:text-white">
        {title}
      </h1>
      <ul>
        {data.map((rocket) => (
          <Link href={`${parentLink}/${rocket.slug}`} key={rocket.id} passHref>
            <li className="text-3xl p-2 text-gray-500 dark:hover:text-gray-300 hover:text-gray-800 hover:font-bold cursor-pointer">
              {rocket.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

SuperList.propTypes = {
  title: PropTypes.string,
  parentLink: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

SuperList.defaultProps = {
  title: "Rocket",
  parentLink: "link",
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default SuperList;
