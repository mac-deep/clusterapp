import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import RocketLayout from "../../../layouts/RocketLayout";
import YoutubeVideo from "../../../components/YoutubeVideo";
import Quote from "../../../components/Quote";
import { getAStar } from "../../../adapters/stars";

function Star({ star }) {
  const router = useRouter();

  if (!star) {
    return (
      <h1>
        rocket of {router.query.rocket}, star {router.query.star} is loading....
      </h1>
    );
  }
  return (
    <>
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

Star.PageLayout = RocketLayout;

export default Star;
