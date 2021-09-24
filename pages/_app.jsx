/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const EmptyLayout = ({ children }) => <>{children}</>;
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const PageLayout = Component.PageLayout || EmptyLayout;

  return (
    <ThemeProvider attribute="class">
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
