import API from '@/adapters/api';
import Link from 'next/link';
import React from 'react';
import { TCluster } from '@/types/cluster.type';

const getACluster = async (clusterId: string): Promise<TCluster> => {
  const res = await fetch(`${API}/clusters/${clusterId}`);
  return res.json();
};

export async function generateMetadata({ searchParams }) {
  const cluster = await getACluster(searchParams.list);

  return {
    title: cluster.title + ' | Cluster',
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { list: string };
}) {
  const cluster = await getACluster(searchParams.list);

  return (
    <div>
      <h2 className="text-5xl dark:text-white">{cluster.title}</h2>
      <ul className="w-full">
        {cluster.stars.map((star, index) => (
          <li
            key={star.id}
            className="dark:text-white p-4 text-lg dark:bg-gray-500 dark:bg-opacity-20"
          >
            <Link
              href={{
                pathname: 'star',
                query: {
                  s: star.id,
                  list: searchParams.list,
                  index: index + 1,
                },
              }}
            >
              {star.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
