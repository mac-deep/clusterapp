import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Layout from "../layouts/Layout";
import Navbar from "../components/core/Navbar";

const Home = () => (
  <Layout title="CLUSTER">
    <Navbar />
    <Box sx={{ flexGrow: 1 }}>Hello</Box>
  </Layout>
);

// Home.propTypes = {
//   clusters: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//     })
//   ),
//   rockets: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//     })
//   ),
// };

// Home.defaultProps = {
//   clusters: [],
//   rockets: [],
// };

// export const getServerSideProps = async () => {
//   const clusters = await getAllClusters()
//     .then((data) => data)
//     .catch((err) => err);
//   const rockets = await getAllRockets()
//     .then((data) => data)
//     .catch((err) => err);
//   return {
//     props: { clusters, rockets },
//   };
// };

export default Home;
