import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const ClusterCard = ({ title, link, cover, summary }) => (
  <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-start p-4">
    <div className="p-4 shadow-md hover:shadow-xl dark:light-shadow-md dark:hover:light-shadow-xl rounded-lg dark:hover:border-white h-full cursor-pointer">
      <Link href={link} passHref>
        <a>
          <div>
            <Image
              width="600"
              height="400"
              objectFit="cover"
              src={cover}
              alt={title}
            />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <span className="text-4xl dark:text-white font-medium">
              {title}
            </span>
          </div>
          <div className="mt-2 text-gray-700 dark:text-gray-400">{summary}</div>
        </a>
      </Link>
    </div>
  </div>
);

ClusterCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  cover: PropTypes.string,
  summary: PropTypes.string,
};

ClusterCard.defaultProps = {
  title: "title",
  link: "link",
  cover: "https://via.placeholder.com/600/400",
  summary: "Summary of this cluster",
};

export default ClusterCard;
