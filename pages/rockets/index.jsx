import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import { getAllRockets } from "../../adapters/rockets";
import Layout from "../../layouts/Layout";
import Navbar from "../../components/core/Navbar";
import RocketCard from "../../components/core/RocketCard";

const Rockets = ({ rockets }) => (
  <Layout>
    <Navbar />
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container spacing={3}>
        {rockets.map((rocket) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <RocketCard rocket={rocket} key={rocket.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Layout>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Rockets.defaultProps = {
  rockets: [],
};

export const getServerSideProps = async () => {
  const rockets = await getAllRockets()
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { rockets },
  };
};

export default Rockets;
