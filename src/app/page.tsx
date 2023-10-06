import React from 'react';
import API from '@/adapters/api';
import { TStar } from '@/types/star.type';
import Link from 'next/link';
import { TCluster } from '@/types/cluster.type';

const getAllStars = async (): Promise<TStar[]> => {
  const res = await fetch(`${API}/stars`);
  return res.json();
};

const getAllClusters = async (): Promise<TCluster[]> => {
  const res = await fetch(`${API}/clusters`);
  return res.json();
};

export default async function Home() {
  const stars = await getAllStars();
  const clusters = await getAllClusters();

  return (
    <div className="">
      <h1 className="text-blue-700 dark:text-blue-300 text-center text-9xl uppercase pt-8 font-bold">
        Cluster
      </h1>
      <p className="text-blue-700 dark:text-white text-center text-3xl font-extralight">
        Universe of Knowledge
      </p>

      <div className="mt-4">
        <h2 className="dark:text-gray-200 text-gray-800 text-2xl">Clusters</h2>
        <div className="flex justify-center mt-8 flex-wrap gap-4">
          {clusters.map((cluster) => (
            <Link
              href={{
                pathname: 'cluster',
                query: `list=${cluster.id}`,
              }}
              className="dark:bg-gray-800 bg-gray-200  dark:text-white text-black px-5 py-2 rounded-xl opacity-50 hover:opacity-100"
              key={cluster.slug}
            >
              {cluster.title}
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="dark:text-gray-200 text-gray-800 text-2xl">Stars</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {stars.map((star) => (
              <Link
                href={{
                  pathname: 'star',
                  query: { s: star.id },
                }}
                className="dark:bg-gray-800 bg-gray-200  dark:text-white text-black px-5 py-2 rounded-xl opacity-50 hover:opacity-100"
                key={star.id}
              >
                {star.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
