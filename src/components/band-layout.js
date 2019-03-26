import React from "react";

import styled from "styled-components";
import { Image, Card } from "rebass";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme.js";
import Helmet from "react-helmet";

import "./layout.css";

const Layout = props => {
  return (
    <ThemeProvider theme={defaultTheme()}>
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/7635694/7339212/css/fonts.css"
          />
        </Helmet>
        <main {...props} />
      </>
    </ThemeProvider>
  );
};

export default Layout;
