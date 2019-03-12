import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { TypographyStyle, GoogleFont } from 'react-typography'
import { ThemeProvider } from 'styled-components';
import styled, { withTheme } from 'styled-components';
import { Box, Image, Card } from 'rebass';

import SL19  from '../images/SL-19.svg';
import BG1  from '../images/bg/SL_001.png';
import BG2  from '../images/bg/SL_002.png';
import BG3  from '../images/bg/SL_003.png';
import BG4  from '../images/bg/SL_004.png';
import BG5  from '../images/bg/SL_005.png';
import BG6  from '../images/bg/SL_006.png';
import BG7  from '../images/bg/SL_007.png';
import BG8  from '../images/bg/SL_008.png';
import BG9  from '../images/bg/SL_009.png';
import BG10  from '../images/bg/SL_010.png';
import BG11  from '../images/bg/SL_011.png';

import Header from "./header";
import Footer from "./footer";
import typography from './typography'
import theme from "../theme.js";
import  "./layout.css";

const backgrounds = [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG8, BG10, BG11];

const getBg = () => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

const PageLayout = styled(Card)`
    min-height: 100vh;
    overflow: hidden;
    position: relative;

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

let updates = -1; 

const Layout = ({ children, bg, onClick }) => {
    const [bgImage, setBg] = useState(null);
    useEffect(() => {
        if(updates < 0)
            setBg(getBg());
        updates++;
    });
    return (
        <ThemeProvider theme={theme}>
            <PageLayout onClick={() => {
                onClick && onClick();
                setBg(getBg());
            }} m={0} backgroundImage={`url(${bgImage})`} bg={bg} >
                <SLBG alt="SL'19" src={SL19} />
                <Header />
                <main>{children}</main>
                <footer>
                    <Footer></Footer>
                </footer>
            </PageLayout>
        </ThemeProvider>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
