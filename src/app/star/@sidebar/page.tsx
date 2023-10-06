import React from 'react';
import Link from 'next/link';
import API from '@/adapters/api';
import PrevNextButton from '@/components/PrevNextButton';
import { TCluster } from '@/types/cluster.type';

const getACluster = async (clusterSlug) => {
  const res = await fetch(`${API}/clusters/${clusterSlug}`);
  return res.json();
};

type PageProps = {
  searchParams: { index: string; list: string; s: string };
};

export default async function Page({ searchParams }: PageProps) {
  const cluster: TCluster = await getACluster(searchParams.list);
  const index = parseInt(searchParams.index);

  const getPrevLink = () => {
    if (index == 1 || !index) {
      return null;
    } else {
      return {
        pathname: 'star',
        query: {
          s: cluster.stars[index - 2].id,
          list: searchParams.list,
          index: index - 1,
        },
      };
    }
  };

  const getNextLink = () => {
    if (index == cluster.stars.length || !index) {
      return null;
    } else {
      return {
        pathname: 'star',
        query: {
          s: cluster.stars[index].id,
          list: searchParams.list,
          index: index + 1,
        },
      };
    }
  };

  if (!searchParams.list) return null;
  else {
    return (
      <aside className="w-80 flex-col flex gap-4">
        <PrevNextButton nextLink={getNextLink()} prevLink={getPrevLink()} />

        <ul className="w-full sticky top-16  rounded-2xl overflow-hidden">
          {cluster.stars.map((star, i) => (
            <li
              key={star.id}
              className={`dark:text-white p-4 text-lg dark:bg-gray-500  bg-gray-400 dark:hover:bg-opacity-20 ${
                i + 1 == index
                  ? 'dark:bg-opacity-30 bg-opacity-30'
                  : 'dark:bg-opacity-10 bg-opacity-10'
              }`}
            >
              <Link
                href={{
                  pathname: 'star',
                  query: {
                    s: star.id,
                    list: searchParams.list,
                    index: i + 1,
                  },
                }}
                className="block"
              >
                {star.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
