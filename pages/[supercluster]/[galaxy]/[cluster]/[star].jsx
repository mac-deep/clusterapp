import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Course from "../../../../layouts/Course";
import YoutubeVideo from "../../../../components/subject/YoutubeVideo";
import Quote from "../../../../components/subject/Quote";

function Star({ star }) {
  const router = useRouter();

  if (!star) {
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
        <title>{star.title}</title>
      </Head>
      <div className="dark:bg-black bg-opacity- min-h-full">
        <div className="p-4 w-full dark:bg-gray-800 ">
          <h1 className="font-medium text-6xl dark:text-gray-100 leading-tight flex align-middle">
            👉{star.title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <main className="px-8 pt-8 w-full">
            {star.videoURL && (
              <section className="mb-8">
                <YoutubeVideo id={star.videoURL} />
              </section>
            )}
            {star.note && (
              <section className="">
                <Quote text={star.note} />
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

Star.propTypes = {
  star: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      videoURL: PropTypes.string,
      note: PropTypes.string,
    })
  ),
};

Star.defaultProps = {
  star: {},
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://clustercms.herokuapp.com/stars/${params.star}`
  );
  const star = await res.json();
  return {
    props: { star },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://clustercms.herokuapp.com/clusters`);
  const data = await res.json();
  const path = data.map((cluster) =>
    cluster.stars.flat().map((star) => ({
      params: {
        supercluster: cluster.supercluster.slug,
        galaxy: cluster.galaxy.slug,
        cluster: cluster.slug,
        star: star.slug,
      },
    }))
  );

  const paths = path.flat();
  return {
    paths,
    fallback: false,
  };
};

Star.PageLayout = Course;

export default Star;
