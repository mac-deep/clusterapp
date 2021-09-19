import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AllSuperCluster } from "../adapters/supercluster";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute top-8 right-8">
      <button
        className="rounded-full m-4 w-12 h-12 "
        onClick={() => setTheme("light")}
      >
        L
      </button>
      <button
        className="rounded-full m-4 w-12 h-12"
        onClick={() => setTheme("dark")}
      >
        D
      </button>
    </div>
  );
};

export default function Home({ data }) {
  return (
    <div className="dark:bg-black min-h-screen">
      <Head>
        <title>CLUSTER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-blue-700 text-center text-6xl uppercase pt-8 font-bold">
        Cluster🌌
      </h1>
      {ThemeChanger()}
      <div className="px-8">
        <h1 className="text-6xl mb-8">Links</h1>
        <ul>
          {data.map((supercluster) => (
            <Link href={`/${supercluster.slug}`} key={supercluster._id}>
              <a>
                <li className="text-3xl py-2">{supercluster.title}</li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async (content) => {
  const res = await fetch("http://localhost:1337/superclusters");
  const data = await res.json();
  return {
    props: { data },
  };
};