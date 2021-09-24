import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ClusterLayout from "../../../../layouts/ClusterLayout";
import YoutubeVideo from "../../../../components/YoutubeVideo";
import Quote from "../../../../components/Quote";
import { getAllClusters } from "../../../../adapters/clusters";
import { getAStar } from "../../../../adapters/stars";

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
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full lg:w-9/12">
          {star.videoURL && (
            <section className="mb-12">
              <YoutubeVideo id={star.videoURL} />
            </section>
          )}
          {star.note && (
            <section className="mb-12">
              <Quote text={star.note} />
            </section>
          )}
        </div>
        <div className="w-full lg:w-1/4">
          <div className="shadow-md border-l-2 bg-white dark:bg-gray-900 lg:ml-12 p-4 flex-1 h-40 rounded-2xl ">
            <h3 className="font-medium mb-2">📝Note</h3>
            <p className="text-xl font-light">Here you can give a tip</p>
          </div>
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
  const star = await getAStar(params.star)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { star },
  };
};

export const getStaticPaths = async () => {
  const clusters = await getAllClusters()
    .then((data) => data)
    .catch((err) => err);
  const path = clusters.map((cluster) =>
    cluster.stars.flat().map((star) => ({
      params: {
        supercluster: cluster.supercluster.slug,
        galaxy: cluster.galaxy.slug,
        cluster: cluster.slug,
        star: star.videoURL,
      },
    }))
  );

  const paths = path.flat();
  return {
    paths,
    fallback: false,
  };
};

Star.PageLayout = ClusterLayout;

export default Star;
