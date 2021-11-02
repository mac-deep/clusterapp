import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Layout from "./Layout";
import { borderRadius } from "@mui/system";

const BlogLayout = ({ children, star }) => (
  <Layout title={star.title}>
    <Container maxWidth="lg" sx={{ paddingTop: "2rem" }}>
      <h4>{format(parseISO(star.published_at), "MMMM dd, yyyy")}</h4>
      <Typography gutterBottom fontWeight="600" variant="h2">
        {star.title}
      </Typography>
      <Grid container spacing={3} display="flex">
        <Grid item sm={12} lg={9}>
          {children}
        </Grid>
        <Grid item sm={12} lg={3}>
          <Paper
            sx={{
              position: "sticky",
              top: "2rem",
              padding: "1rem",
              borderRadius: 4,
            }}
          >
            <Typography gutterBottom variant="h6">
              📝 Note
            </Typography>
            <Typography variant="body2" fontWeight="300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore adipisci nesciunt dolorum magni aliquam, autem mollitia
              pariatur similique deserunt, voluptatem, eos dignissimos
              architecto. Sequi, modi eligendi id a perspiciatis saepe.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
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
