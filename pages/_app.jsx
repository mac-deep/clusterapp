/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";

const EmptyLayout = ({ children }) => <>{children}</>;
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const PageLayout = Component.PageLayout || EmptyLayout;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.objectOf(PropTypes.node),
  pageProps: PropTypes.objectOf(PropTypes.node),
};

MyApp.defaultProps = {
  Component: {},
  pageProps: {},
};

EmptyLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.node),
};

EmptyLayout.defaultProps = {
  children: {},
};

export default MyApp;
