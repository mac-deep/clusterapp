import React from "react";
import PropTypes from "prop-types";
import ClusterLayout from "../../../layouts/ClusterLayout";
import YoutubeVideo from "../../../components/core/YoutubeVideo";
import Quote from "../../../components/core/Quote";
import { getAStar } from "../../../adapters/stars";
import Layout from "../../../layouts/Layout";

const Star = ({ star }) => (
  <Layout title={star.title}>
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
  </Layout>
);

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

Star.PageLayout = ClusterLayout;

export default Star;
