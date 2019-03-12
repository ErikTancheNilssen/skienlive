import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
import { Heading, Flex, Box, Image } from 'rebass';
import styled from 'styled-components';

import TA from '../images/TA.svg';
import SB from '../images/SB.svg';
import SE from '../images/SE.png';
import SK from '../images/SK.svg';


const ButtonLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

`;


const Footer = ({ siteTitle }) => (
    <Flex flexDirection={["column", "column", "row"]} pt={8} m={[2,3,6]} mb={0}>
        <ButtonLink target="_blank" href="http://ta.no">
            <Image height={70} p={4} src={TA}/>
        </ButtonLink>
        <ButtonLink target="_blank" href="http://skienbrygge.no/">
            <Image height={55}  p={4} src={SB}/>
        </ButtonLink>
        <ButtonLink target="_blank" href="https://www.skagerakenergi.no/">
            <Image width={160}  p={4} src={SE}/>
        </ButtonLink>
        <ButtonLink target="_blank" href="https://www.skien.kommune.no/">
            <Image height={120}  p={4} src={SK}/>
        </ButtonLink>
    </Flex>

)

export default Footer
