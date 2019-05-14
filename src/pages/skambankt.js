import React from "react";
import { Text, Heading } from "rebass";
import ArtistPage from "../components/ArtistPage.js";
import { StaticQuery, graphql } from "gatsby";
import { TitleArtist, Date, P } from "../components/artist.js";

const Body = () => (
  <StaticQuery
    query={graphql`
      query {
        horisontal: file(
          relativePath: { eq: "artists/horisontal/skambankt.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/skambankt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ArtistPage
        title="Skambankt"
        data={data}
        artist={
          <>
            <Date color="p1">14. JUNI</Date>
            <TitleArtist color="p1">Skambankt</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Skambankt er et kompromissløst hardrockband fra Jæren i Rogaland,
              med lengre fartstid enn de fleste andre band som starter opp som
              unge tenåringer. Som en av Norges pionerer innen sjangeren har
              bandet utallige konsertdatoer og 7 skiver i ryggen. Helt siden
              deres andre skive,{" "}
              <Text as="bold" color="p1">
                «Eliksir»
              </Text>
              , har de okkupert topp 10-pallen på Norges nasjonale hitlister og
              tok førsteplassen med albumet{" "}
              <Text as="bold" color="p1">
                «Sirene»
              </Text>{" "}
              i 2014. En skive som forøvrig ble mottatt med hele 15 femmere. I
              2013 stakk de av med Spotify-prisen for{" "}
              <Text as="bold" color="p1">
                «årets innovatør»
              </Text>{" "}
              under Spellemannprisen.
            </P>
            <P>
              I fjor gjorde Skambankt storslått come-back med albumet{" "}
              <Text as="bold" color="p1">
                «Horisonten Brenner»
              </Text>{" "}
              , etterfulgt av omfattende Norges-turné, utsolgte konserter (blant
              annet på Rockefeller) og slipp av livealbumet{" "}
              <Text as="bold" color="p1">
                «Live At Rockefeller 2018»
              </Text>{" "}
              for å nevne noen høydepunkter.
            </P>
            <P>
              Skambankt har opptrådt på mange av de største festivalene i
              Norden, og har blitt invitert hele tre ganger til
              Roskildefestivalen. Med ny dobbelsingel ute legger de nå ut på ny
              turné, ny festivalsommer og nye muligheter.
            </P>
            <Heading fontFamily="Vollkorn" fontSize={2}>
              BANDMEDLEMMER:
            </Heading>
            <P>
              Terje Winterstø Røthing - Vokal, Gitar <br />
              Hans Egil Løe Abelsnes - Gitar, Vokal
              <br />
              Tollak Kalvatn Friestad - Bass
              <br />
              Børge Sageng Henriksen - Trommer
              <br />
              Jonny Engelsvoll - Tangenter
              <br />
            </P>
          </>
        }
      />
    )}
  />
);

export default Body;
