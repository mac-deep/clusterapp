import React from "react";
import Head from "next/head";

const Layout = ({ title = "CLUSTER", meta, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Universe of Knowledge" />
      <link rel="icon" href="/cluster.ico" />
    </Head>
    {children}
  </>
);

export default Layout;
