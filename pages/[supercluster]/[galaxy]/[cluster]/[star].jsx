import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ClusterLayout from "../../../../layouts/ClusterLayout";
import YoutubeVideo from "../../../../components/YoutubeVideo";
import Quote from "../../../../components/Quote";
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
        <title>
          {star.title} - {router.query.cluster} | CLUSTER
        </title>
      </Head>
      <div className="w-full text-7xl mb-12">🔸{star.title}</div>
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full lg:w-9/12">
          {star.videoURL && (
            <section className="mb-12">
              <YoutubeVideo id={star.videoURL} />
            </section>
          )}
        </div>
        <div className="w-full lg:w-1/4">
          {star.note && (
            <div className="lg:ml-12 flex-1">
              <Quote text={star.note} />
            </div>
          )}
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

export const getServerSideProps = async ({ params }) => {
  const star = await getAStar(params.star)
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { star },
  };
};

// export const getStaticPaths = async () => {
//   const clusters = await getAllClusters()
//     .then((data) => data)
//     .catch((err) => err);
//   const path = clusters.map((cluster) =>
//     cluster.stars.flat().map((star) => ({
//       params: {
//         supercluster: cluster.supercluster.slug,
//         galaxy: cluster.galaxy.slug,
//         cluster: cluster.slug,
//         star: star.videoURL,
//       },
//     }))
//   );

//   const paths = path.flat();
//   return {
//     paths,
//     fallback: false,
//   };
// };

Star.PageLayout = ClusterLayout;

export default Star;
