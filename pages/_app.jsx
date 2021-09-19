/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const EmptyLayout = ({ children }) => <>{children}</>;

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
  Component: PropTypes.node,
  pageProps: PropTypes.node,
};

MyApp.defaultProps = {
  Component: PropTypes.node,
  pageProps: PropTypes.node,
};

EmptyLayout.propTypes = {
  children: PropTypes.node,
};

EmptyLayout.defaultProps = {
  children: PropTypes.node,
};

export default MyApp;
