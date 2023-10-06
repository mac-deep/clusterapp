import API from '@/adapters/api';
import React from 'react';
import { TStar } from '@/types/star.type';
import matter from 'gray-matter';
import MDXComponents from '@/components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { parseISO, format } from 'date-fns';

// export async function generateStaticParams() {
//   const res = await fetch(`${API}/stars`);
//   const stars: TStar[] = await res.json();

//   return stars.map((star) => ({
//     id: star.id,
//   }));
// }

const getAStar = async (starId: string): Promise<TStar> => {
  const res = await fetch(`${API}/stars/${starId}`);
  return res.json();
};

export async function generateMetadata({ searchParams }) {
  const star: TStar = await getAStar(searchParams.s);

  return {
    title: star.title,
  };
}

const components = MDXComponents;

type PageProps = {
  searchParams: { s: string };
};

export default async function Page({ searchParams }: PageProps) {
  const star = await getAStar(searchParams.s);
  const { content: mdxSource } = matter(star.body);

  return (
    <div>
      <h4 className="dark:text-gray-300 text-gray-700">
        {format(parseISO(star.published_at), 'MMMM dd, yyyy')}
      </h4>
      <h2 className="text-8xl w-5/6 mb-12 dark:text-white">{star.title}</h2>
      <MDXRemote source={mdxSource} components={{ ...components }} />
    </div>
  );
}
