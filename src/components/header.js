import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import Arrow from "../images/arrow.svg"
import { Heading, Flex, Box, Image } from 'rebass';
import styled, { withTheme } from 'styled-components';

const ButtonLink = styled(Heading)`
    color: white;
    background: black;
    text-transform: uppercase;
    @media (max-width: 1200px) {
      display: inline-block;
    }
`;

const Right = styled(Box)`
    flex-grow: 0;
`;

const Left = styled(Box)`
    flex-grow: 1;

`;

const Header = () => (
    <Flex flexDirection={["column", "column", "row"]} mx={[3,3,3,6]} mt={[4,4,4,6]} mb={6} as="header">
        <Left>
            <Image width={[200,200,350]} m={0} src={logo}/>
        </Left>
        <Right mt={2}>
            <a href="https://skienlive.ticketco.events/no/nb/e/skien_live_2019">
                <ButtonLink m={0} fontWeight="normal" fontSize={[2]} py={1} px={3} target="_parent"
                >Kjøp billetter
                    <Image ml={2} src={Arrow} />
                </ButtonLink>
            </a>
        </Right>
    </Flex>
)


export default Header
