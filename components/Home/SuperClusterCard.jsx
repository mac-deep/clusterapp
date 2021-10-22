import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const SuperClusterCard = ({ title, data }) => (
  <div className="w-full lg:w-1/3 sm:w-1/2 h-full">
    <div className="m-8 p-8 shadow-2xl dark:light-shadow-2xl transition-shadow rounded-3xl">
      <h1 className="text-6xl font-semibold mb-8 text-gray-800 dark:text-white">
        {title}
      </h1>
      <ul>
        {data.map((supercluster) => (
          <Link href={`/${supercluster.slug}`} key={supercluster.id} passHref>
            <li className="text-3xl p-2 text-gray-500 dark:hover:text-gray-400 hover:underline hover:text-gray-800 hover:font-bold cursor-pointer">
              {supercluster.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

SuperClusterCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.string,
      stars: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
        })
      ),
    })
  ),
};

SuperClusterCard.defaultProps = {
  title: "SuperCluster",
  data: [],
};

export default SuperClusterCard;
