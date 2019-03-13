import React  from "react"
import { Box} from 'rebass';
import Layout from "../components/layout"
import { Artist, Date, Text } from "../components/artist.js"
import SEO from "../components/seo"
import styled, { withTheme } from 'styled-components';
import { setLightness } from 'polished';
import Helmet from "react-helmet"

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

const Body = withTheme(({theme}) => (
    <>
        <Row mb={[2,3,6]}>
            <One my={3} mx="auto" p={5}>
                <Date ml={7} >14. juni</Date>
                <Artist mr={3}>Skambankt</Artist>
                <Artist>The Dogs</Artist>
                <Artist mr={[3,3,6]}>El Kayenne</Artist>
            </One>
        </Row>
        <Row mb={7}>
            <Two m={[1,2,4]} p={[2,3,6]}>
                <Date>15. juni</Date>
                <Artist ml={[2,3,6]}>Dagny</Artist>
                <Artist mr={[2,3,6]}>Datarock</Artist>
                <Text mt={7} ml={[2,4,8]} >Flere artister slippes snart...</Text>
            </Two>
        </Row>
        <Box>
            <Three mr={[2,1,3,8]} m={[1,2,4]}  p={[1,1,6]}>
                <Artist>Hamburgskuret</Artist>
                <Artist color={setLightness(0.8, theme.mainColor)}>14. -15. juni 2019</Artist>
            </Three>
        </Box>
    </>
));

const IndexPage = () => {
    
    return (
        <Layout>
            <SEO title={"SL'19"} keywords={[`2019`, `Skien`, `ETN`]} />
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7635694/7339212/css/fonts.css" />
            </Helmet>
            <Body></Body>
        </Layout>

    );
}

export default IndexPage;
