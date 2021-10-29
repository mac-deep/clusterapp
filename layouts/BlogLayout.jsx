import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import Layout from "./Layout";

const BlogLayout = ({ children, star }) => (
  <Layout title={star.title}>
    <div className="max-w-7xl w-full py-20">
      <h4>{format(parseISO(star.published_at), "MMMM dd, yyyy")}</h4>
      <h1 className="sm:text-7xl text-5xl font-bold pb-12">{star.title}</h1>
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">{children}</div>
      </div>
    </div>
  </Layout>
);

BlogLayout.propTypes = {
  children: PropTypes.node,
  star: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      videoURL: PropTypes.string,
      note: PropTypes.string,
    })
  ),
};

BlogLayout.defaultProps = {
  children: PropTypes.node,
  star: {},
};

export default BlogLayout;
