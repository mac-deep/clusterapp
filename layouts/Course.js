import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Course = ({ children }) => {
  const router = useRouter();
  const clusterId = router.query.cluster;
  const starId = router.query.star;

  const [data, setData] = useState(null);

  const preLoad = async () => {
    fetch(`http://localhost:1337/clusters/${clusterId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => preLoad(), []);

  const ListItem = ({ name, slug }) => {
    return (
      <Link href={`/${clusterId}/${slug}`} passHref>
        <a>
          <li
            className={`p-4 border-l-4 text-2xl font-normal ease-in border-transparent text-gray-600 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800 ${
              router.query.star === slug &&
              "bg-blue-50 border-l-4 border-blue-400 font-bold  text-gray-900 dark:bg-gray-800"
            }`}
          >
            {name}
          </li>
        </a>
      </Link>
    );
  };

  return (
    <div className="relative flex">
      {data ? (
        <aside className="hidden sm:block w-11/12 sm:w-96 z-50 bg-white dark:bg-gray-900 h-screen fixed shadow-2xl ">
          <div className="p-4 shadow-lg">
            <Link href={`/${clusterId}`}>
              <a>
                <h1 className="font-bold text-6xl text-blue-700 dark:text-blue-400 ">
                  {data.title}
                </h1>
              </a>
            </Link>
          </div>

          <ul className="overflow-y-scroll h-full pb-8">
            {data.stars?.map((star) => (
              <ListItem
                name={star.title}
                key={star._id}
                slug={star.slug}
              />
            ))}
          </ul>
        </aside>
      ) : (
        <h1>Loading...</h1>
      )}
      <main className="w-full z-0 sm:ml-96  min-h-screen dark:bg-black">
        {children}
      </main>
    </div>
  );
};

export default Course;
