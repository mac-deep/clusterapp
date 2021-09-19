import React from "react";
import Image from "next/image";
import Link from "next/link";

const ClusterCard = ({
  title,
  link,
  cover = "https://via.placeholder.com/600/400",
  category,
  summary,
}) => {
  return (
    <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-start p-4">
      <div className="p-4 shadow-md hover:shadow-xl rounded-lg border-1 dark:border-gray-800 h-full ">
        <Link href={link} passHref>
          <a>
            <div>
              <Image width="600" height="400" objectFit="cover" src={cover} />
            </div>
            <div className="flex justify-between mt-3 items-center">
              <span className="text-4xl  font-medium">{title}</span>
              {category === "frontend" && (
                <span className=" bg-blue-500 text-base py-1 px-4 rounded-full text-white">
                  {category}
                </span>
              )}
              {category === "backend" && (
                <span className="bg-red-500 text-base py-1 px-4 rounded-full text-white">
                  {category}
                </span>
              )}
              {category === "database" && (
                <span className="bg-green-500 text-base py-1 px-4 rounded-full text-white">
                  {category}
                </span>
              )}
            </div>
            <div className="mt-2 text-gray-700 dark:text-gray-400">
              {summary}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ClusterCard;
