import React from "react";
import Head from "next/head";
import Course from "../../../../layouts/Course";
import { useRouter } from "next/router";
import YoutubeVideo from "../../../../components/subject/YoutubeVideo";
import BlogItem from "../../../../components/subject/BlogItem";
import Quote from "../../../../components/subject/Quote";

function Chapter({ data }) {
  const router = useRouter();

  if (!data) {
    return (
      <h1>
        cluster of {router.query.cluster}, star {router.query.star} is
        loading....
      </h1>
    );
  }
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="dark:bg-black bg-opacity- min-h-full">
        <div className="p-4 w-full dark:bg-gray-800 ">
          <h1 className="font-medium text-6xl dark:text-gray-100 leading-tight flex align-middle">
            👉{data.title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <main className="px-8 pt-8 w-full">
            {data.videoURL && (
              <section className="mb-8">
                <YoutubeVideo id={data.videoURL} />
              </section>
            )}
            {data.blogs && (
              <section className="mb-8">
                <h1 className="text-4xl mb-4">
                  <span className="underline">Blogs</span> 📃
                </h1>
                <ul>
                  {data.blogs.map((blog, index) => (
                    <BlogItem
                      key={index}
                      title={blog.title}
                      url={blog.blogURL}
                    />
                  ))}
                </ul>
              </section>
            )}
            {data.note && (
              <section className="">
                <Quote text={data.note} />
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/stars/${params.star}`);
  const data = await res.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:1337/clusters`);
  const data = await res.json();
  const path = data.map((cluster) => {
    return cluster.stars.flat().map((star) => {
      return {
        params: {
          supercluster: cluster.supercluster.slug,
          galaxy: cluster.galaxy.slug,
          cluster: cluster.slug,
          star: star.slug,
        },
      };
    });
  });
  const paths = path.flat();
  return {
    paths,
    fallback: false,
  };
};

Chapter.PageLayout = Course;

export default Chapter;
