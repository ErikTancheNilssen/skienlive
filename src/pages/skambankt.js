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
              Skambankts sjette album,{" "}
              <Text as="bold" color="p1">
                <q>Horisonten Brenner</q>
              </Text>{" "}
              presenterer en ytterst smakfull og ektefølt rockeskive med en
              sterk groovefaktor. I løpet av platas 9 spor blir du dratt gjennom
              rivende trommeslageri med de tyngste fire flate som finnes,
              vokalspor som får strupen til å krible, og gitarer som røsker
              hardere enn vestavinden på Jæren. Skiva opererer med groove og
              tyngde som hovedpremiss, men den klangfulle vokalen kontrasterer
              riffinga, og manifesterer en avhengighetsskapende og moderne
              blanding som får skjegget til å gro hos både kvinner og menn!
            </P>
            <P>
              Skambankt er et kompromissløst hardrockband fra Jæren i Rogaland,
              med lengre fartstid enn de fleste andre band som starter opp som
              unge tenåringer. Bandet har utallige konsertdatoer og 5 skiver bak
              ryggen. Helt siden deres andre skive,{" "}
              <Text as="bold" color="p1">
                <q>Eliksir</q>
              </Text>
              , har de okkupert topp 10-pallen på Norges nasjonale hitlister, og
              tok førsteplassen med deres forrige skive{" "}
              <Text as="bold" color="p1">
                <q>Sirene</q>
              </Text>{" "}
              i 2014. I 2013 stakk de av med Spotify-prisen for{" "}
              <Text as="bold" color="p1">
                <q>årets innovatør</q>
              </Text>{" "}
              under Spellemannprisen.
            </P>
            <P>
              Skambankt er i dag regnet som en av Norges pionerer innen
              sjangeren, med et repertoar på 5, snart 6, skiver og én EP å
              trollbinde publikum med.
            </P>
            <P>
              Skambankt har opptrådt på mange av de største festivalene i
              Norden, og har blitt invitert hele tre ganger til
              Roskildefestivalen. Nå venter ny turné, ny festivalsommer og nye
              muligheter.
            </P>
            <P>
              Skambankts siste album,{" "}
              <Text as="bold" color="p1">
                <q>Sirene</q>
              </Text>{" "}
              (2014), ble mottatt med hele 15 femmere
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
