/* eslint-disable react/prop-types */
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const MDXComponents = {
  h1: (props) => (
    <h1 className="text-7xl text-blueGray-800 dark:text-blueGray-200 mt-12 mb-4">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 className="text-6xl text-blueGray-800 dark:text-blueGray-200 font-medium mt-12 mb-4">
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="text-5xl text-blueGray-800 dark:text-blueGray-200 font-medium mt-12 mb-4">
      {props.children}
    </h3>
  ),
  h4: (props) => (
    <h4 className="text-4xl text-blueGray-800 dark:text-blueGray-200 mt-12 mb-4">
      {props.children}
    </h4>
  ),
  h5: (props) => <h5 className="text-3xl mt-12 mb-4">{props.children}</h5>,
  h6: (props) => <h6 className="text-4xl mt-12 mb-4">{props.children}</h6>,
  strong: (props) => (
    <strong className="font-bold text-gray-700 dark:text-gray-200">
      {props.children}
    </strong>
  ),
  p: (props) => (
    <p className="sm:text-3xl text-xl text-justify font-normal text-gray-700 dark:text-gray-400 ">
      {props.children}
    </p>
  ),
  YoutubeVideo: ({ id }) => (
    <div
      className="relative overflow-hidden mb-16"
      style={{ width: "100%", paddingTop: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-2xl"
        width="513"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
        allowFullScreen="allowfullscreen"
      />
    </div>
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 text-4xl mt-12 mb-4 tracking-normal rounded-md border-blue-600 dark:border-blue-100 dark:bg-blue-900 bg-blue-100 p-4">
      {props.children}
    </blockquote>
  ),
  TwitterTweetEmbed: ({ id }) => (
    <div className="w-full">
      <TwitterTweetEmbed tweetId={id} />,
    </div>
  ),
};

export default MDXComponents;
