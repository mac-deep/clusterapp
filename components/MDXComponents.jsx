/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const MDXComponents = {
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,

  strong: (props) => <strong>{props.children}</strong>,
  p: (props) => <Typography variant="body1" {...props} />,
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
    <Paper sx={{ background: "brown" }}>{props.children}</Paper>
  ),
  TwitterTweetEmbed: ({ id }) => (
    <div className="w-full">
      <TwitterTweetEmbed tweetId={id} />,
    </div>
  ),
};

export default MDXComponents;
