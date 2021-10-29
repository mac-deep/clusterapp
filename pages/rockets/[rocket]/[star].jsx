/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import BlogLayout from "../../../layouts/BlogLayout";
import RocketLayout from "../../../layouts/RocketLayout";
import { getAStar } from "../../../adapters/stars";
import MDXComponents from "../../../components/MDXComponents";

const components = MDXComponents;

const Star = ({ mdxSource, star }) => (
  <BlogLayout star={star}>
    <MDXRemote {...mdxSource} components={components} />
  </BlogLayout>
);

Star.propTypes = {
  mdxSource: PropTypes.node,
  star: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      videoURL: PropTypes.string,
      note: PropTypes.string,
    })
  ),
};

Star.defaultProps = {
  mdxSource: PropTypes.node,
  star: {},
};

export async function getServerSideProps({ params }) {
  const star = await getAStar(params.star)
    .then((data) => data)
    .catch((err) => err);
  const { content } = matter(star.body);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
  });
  return { props: { mdxSource, star } };
}

Star.PageLayout = RocketLayout;

export default Star;
