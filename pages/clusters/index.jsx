import React from "react";
import { Box, Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { getAllClusters } from "../../adapters";
import Layout from "../../layouts/Layout";
import ClusterCard from "../../components/core/ClusterCard";
import Navbar from "../../components/core/Navbar";

const Clusters = ({ clusters }) => (
  <Layout>
    <Navbar />
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container spacing={3}>
        {clusters.map((cluster) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ClusterCard cluster={cluster} key={cluster.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Layout>
);

Clusters.propTypes = {
  clusters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Clusters.defaultProps = {
  clusters: [],
};

export const getServerSideProps = async () => {
  const clusters = await getAllClusters()
    .then((data) => data)
    .catch((err) => err);
  return {
    props: { clusters },
  };
};

export default Clusters;
