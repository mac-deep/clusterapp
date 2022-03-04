<<<<<<< Updated upstream
import React from "react";
import ThemeChanger from "../components/core/ThemeChanger";
import SuperTitle from "../components/Home/SuperTitle";
import Layout from "../layouts/Layout";

const Home = () => (
  <Layout title="CLUSTER">
    <div className="dark:bg-dark bg-gray-50 min-h-screen">
      <ThemeChanger />
      <h1 className="text-blue-700 dark:text-blue-300 text-center text-9xl uppercase pt-8 font-bold">
        Cluster
      </h1>
      <h4 className="text-blue-700 dark:text-white text-center text-5xl font-extralight">
        Universe of Knowledge
      </h4>
      <div className="p-8 mt-16 flex flex-wrap">
        <SuperTitle title="Clusters 🌌" link="/clusters" />
        <SuperTitle title="Rockets 🚀" link="/rockets" />
      </div>
    </div>
  </Layout>
);
=======
import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Layout from "../layouts/Layout";
import Navbar from "../components/core/Navbar";
const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => setOpen(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Layout title="CLUSTER">
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>Hello</Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Incase of failed load ^_____^
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If the page failed to load, kindly refresh it again as we are
            running on free version of server :)
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
>>>>>>> Stashed changes

export default Home;
