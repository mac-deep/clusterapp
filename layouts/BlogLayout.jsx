import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
<<<<<<< Updated upstream
=======
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
>>>>>>> Stashed changes
import Layout from "./Layout";

const BlogLayout = ({ children, star }) => (
  <Layout title={star.title}>
    <div className="max-w-7xl w-full py-20">
      <h4>{format(parseISO(star.published_at), "MMMM dd, yyyy")}</h4>
<<<<<<< Updated upstream
      <h1 className="sm:text-7xl text-5xl font-bold pb-12">{star.title}</h1>
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">{children}</div>
      </div>
    </div>
=======
      <Typography
        gutterBottom
        position="sticky"
        fontWeight="600"
        variant="h3"
        component="h2"
      >
        {star.title}
      </Typography>
      <Grid container spacing={3} display="flex">
        <Grid item sm={12} lg={9} flex="1">
          {children}
        </Grid>
        <Grid item sm={12} lg={3}>
          <Paper
            sx={{
              position: "sticky",

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
          <Button
            sx={{ margin: "1rem 0", borderRadius: 4 }}
            variant="contained"
            fullWidth
          >
            Mark as ✅ completed
          </Button>
        </Grid>
      </Grid>
    </Container>
>>>>>>> Stashed changes
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
