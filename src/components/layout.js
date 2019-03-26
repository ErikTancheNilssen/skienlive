import React from "react";

import styled from "styled-components";
import { Image, Card } from "rebass";
import { ThemeProvider } from "styled-components";

import updatedTheme, { defaultTheme } from "../theme.js";
import Header from "./header";
import Footer from "./footer";
import Helmet from "react-helmet";

import "./layout.css";

const PageLayout = styled(Card)`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  transition: background-color 3s ease-in, background-image 3s ease-in;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    padding-bottom: 100px;
  }
`;

const SLBG = styled(Image)`
  position: absolute;
  right: -2em;
  top: -1em;
  pointer-events: none;
  width: 30vw;

  @media (max-width: 1200px) {
    bottom: 1em;
    top: auto;
    right: -5px;
  }
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: defaultTheme() };
  }

  componentDidMount() {
    this.setState({
      theme: updatedTheme()
    });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <PageLayout
          m={0}
          backgroundImage={theme.bg ? `url(${theme.bg})` : null}
          bg={theme.mainColor}
        >
          <Helmet>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cloud.typography.com/7635694/7339212/css/fonts.css"
            />
          </Helmet>

          <SLBG alt="SL'19" src={theme.SL19} />
          <Header />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </PageLayout>
      </ThemeProvider>
    );
  }
}

export default Layout;
