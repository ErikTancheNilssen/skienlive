import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { Box} from 'rebass';
import Layout from "../components/layout"
import Image from "../components/image"
import { Artist, Date, Text } from "../components/artist.js"
import SEO from "../components/seo"
import styled  from 'styled-components';
import { lighten } from 'polished';
import Helmet from "react-helmet"
import theme from "../theme.js";

const One = styled(Box)`
    text-align: right;
    display: inline-block;
`;

const Two = styled(Box)`
    text-align: left;
    display: inline-block;
`;

const Three = styled(Box)`
    text-align: right;
`;

const Row = styled(Box)`
    text-align: center;
`;

const bgColor = () => {
    return "p" + Number(Math.floor(Math.random() * 4) + 1);
}

let updates = -1; 

const IndexPage = () => {
    const [randomBgColour, setBg] = useState(bgColor());

    

    return (
        <Layout onClick={()=> setBg(bgColor())} bg={randomBgColour}>
            <SEO title="Hjem" keywords={[`2019`, `Skien`, `ETN`]} />
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7635694/7339212/css/fonts.css" />
            </Helmet>
            <Row mb={[2,3,6]}>
                <One my={3} mx="auto" p={5}>
                    <Date ml={7} >14. juni</Date>
                    <Artist mr={3}>El Kayenne</Artist>
                    <Artist>The Dogs</Artist>
                </One>
            </Row>
            <Row mb={7}>
                <Two m={[1,2,4]} p={[2,3,6]}>
                    <Date>15. juni</Date>
                    <Artist ml={[2,3,6]}>Dagny</Artist>
                    <Text mt={7} ml={[2,4,8]} >Flere artister slippes snart...</Text>
                </Two>
            </Row>
            <Box>
                <Three mr={[2,1,3,8]} m={[1,2,4]}  p={[1,1,6]}>
                    <Artist>Hamburgskuret</Artist>
                    <Artist color={lighten(0.3, theme.colors[randomBgColour])}>14. -15. juni 2019</Artist>
                </Three>
            </Box>
        </Layout>
    );
}

export default IndexPage;
