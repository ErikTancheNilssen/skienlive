import React from "react";
import { Box, Text, Flex, Card } from "rebass";
import { Link } from "gatsby";
import { TitleArtist, Date } from "../components/artist.js";
import Band from "../components/band-layout.js";
import ButtonLink from "../components/ButtonLink.js";
import SEO from "../components/seo";
import Logo from "../components/logo.js";
import styled, { withTheme } from "styled-components";
import ArtistCard from "../components/ArtistCard.js";
import { StaticQuery, graphql } from "gatsby";

const Page = styled(Box)`
  display: grid;
  grid-template-areas: "artist" "content";
  grid-template-columns: 1fr;
  grid-template-rows: 100vh auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr minmax(auto, 700px);
    grid-template-rows: minmax(100vh, auto);
    grid-template-areas: "artist content";
  }
`;

const DateText = styled(Text)`
  text-transform: uppercase;
  line-height: 0.8;
  transition: color 2s ease;
  text-align: left;
`;
const Top = styled(Box)`
  flex-grow: 1;
`;
const Bottom = styled(Box)`
  flex-grow: 0;
`;

const TextArea = styled(Box)`
  position: relative;
  @media (min-width: 1200px) {
    position: relative;
    max-height: 100vh;
    overflow: auto;
  }
`;

const Close = styled(Link)`
  font-weight: bold;
  position: fixed;
  top: 20px;
  right: 20px;
  color: black;
  width: 1em;
  height: 1em;
  text-align: center;
  line-height: 0.8em;
  background: rgba(255, 255, 255, 1);
  padding-left: 2px;
  cursor: pointer;
  font-size: 1.25em;
`;

const Body = withTheme(({ theme }) => (
  <StaticQuery
    query={graphql`
      query {
        horisontal: file(
          relativePath: { eq: "artists/horisontal/thedogs.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/thedogs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Page>
        <ArtistCard
          img=""
          px={[3, 3, 3, 6]}
          py={[4, 4, 4, 6]}
          flexDirection="column"
          data={data}
        >
          <Top p={[3, 3, 3, 4]}>
            <Logo />
          </Top>
          <Bottom p={[3, 3, 3, 4]} flexGrow={1}>
            <Date>14. JUNI</Date>
            <TitleArtist>The Dogs</TitleArtist>
          </Bottom>
        </ArtistCard>
        <TextArea py={6} px={[3, 3, 3, 6]} bg="white">
          <Close to="/" title="Lukk">
            &times;
          </Close>

          <Text
            mb={3}
            fontSize={[1, 1, 1, 2]}
            color="body"
            fontFamily="Vollkorn"
          >
            2018 var året Skambankt gjorde storslått come-back med albumet
            Horisonten Brenner», etterfulgt av omfattende Norges-turné, utsolgte
            konserter (blant annet på Rockefeller), slipp av livealbumet «Live
            At Rockefeller 2018», A-listing på fire radiokanaler, ros fra både
            presse og fans, og velfortjente plasseringer på flere «Årets Album»
            lister.
          </Text>

          <Text
            mb={3}
            fontSize={[1, 1, 1, 2]}
            color="body"
            fontFamily="Vollkorn"
          >
            Men de hviler ikke på laurbærene av den grunn og er i 2019 ute med
            ny musikk og flere konsertdatoer! 04 August spiller de i
            Hamburgskuret.
          </Text>

          <Box my={6}>
            <ButtonLink />
          </Box>
        </TextArea>
      </Page>
    )}
  />
));

const IndexPage = () => {
  return (
    <Band>
      <SEO title="The dogs" />
      <Body />
    </Band>
  );
};

export default IndexPage;
