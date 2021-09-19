import React from "react";
import Link from "next/link";

const GalaxyPill = ({ title, link, summary }) => (
  <div className="md:w-1/2 xl:w-1/3">
    <Link href={link} passHref>
      <a>
        <div className="m-4 p-4 shadow-md hover:shadow-xl rounded-lg border-1 dark:border-gray-800">
          <div className="flex justify-center mb-3 items-center">
            <span className="text-5xl font-medium">{title}</span>
          </div>
          <div className="mt-2 text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default GalaxyPill;
