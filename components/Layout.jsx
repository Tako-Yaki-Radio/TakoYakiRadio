import React from "react";
import Head from "next/head";
import Header from "./NavBar";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Layout = ({ children, title, useContainer = "yes" }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      .container {
        max-width: 65rem;
        margin: 1.5rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    `}</style>
    <Header />

    <main>
      <div className={useContainer === "yes" ? "container" : ""}>
        {children}
      </div>
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
