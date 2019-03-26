import React from "react";
import { Text } from "rebass";
import ArtistPage from "../components/ArtistPage.js";
import { StaticQuery, graphql } from "gatsby";
import { TitleArtist, Date, P } from "../components/artist.js";

const Body = () => (
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
      <ArtistPage
        title="The Dogs"
        data={data}
        artist={
          <>
            <Date color="p4">14. JUNI</Date>
            <TitleArtist color="p4">The Dogs</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Landets mest hardtarbeidende rockeband,{" "}
              <Text as="bold" color="p4">
                The Dogs
              </Text>
              , slipper også i 2019 et nytt album på årets første mandag!
            </P>
            <P>
              I 2018 stod{" "}
              <Text as="bold" color="p4">
                The Dogs
              </Text>
              , ifølge IFPI Norge, bak årets mestselgende album på vinyl i Norge
              med{" "}
              <Text as="bold" color="p4">
                «The Grief Manual»
              </Text>
              . Over nyttår følger de opp suksessen med{" "}
              <Text as="bold" color="p4">
                «Before Brutality»
              </Text>
              , som kommer i salg mandag 7. januar. Dette er The Dogs sitt
              syvende album.
            </P>
            <P>
              Frontmann, Kristopher Schau, legger vekt på at dette er lyden av
              et band som jobber hardt for å ikke forandre seg.
            </P>
            <P>
              – Først og fremst håper jeg bare at vi fremdeles låter som oss
              sjøl. Det er dette soundet og denne type låter vi liker, og
              gudskjelov det det folka som kommer for å se oss også liker, så
              progresjon og{" "}
              <Text as="bold" color="p4">
                «kunstnerisk utvikling»
              </Text>{" "}
              får dere oppsøke annensteds. Som musikkfan er forandring DET
              verste jeg veit om fra band jeg liker, så den fella er det viktig
              å ikke dette ned i. Vi vil bare lage best mulig musikk innenfor
              vårt eget univers, og det synes vi at vi har klart igjen, sier
              han. Tekstmessig er{" "}
              <Text as="bold" color="p4">
                «Before Brutality»
              </Text>{" "}
              en videreføring av fjorårets album{" "}
              <Text as="bold" color="p4">
                «The Grief Manual»
              </Text>
              . Men i stedet for sorg som hovedtematikk, er{" "}
              <Text as="bold" color="p4">
                «Before Brutality»
              </Text>{" "}
              hakket hissigere. Der fjorårets plate kanskje var mer egnet for
              grining i sofaen, heller denne i følge bandet mer mot grining
              utendørs - med knyttede never og glasskår i knokene.
            </P>
            <P>Vi gleder oss!</P>
            <P>Foto: Glenn Melling</P>
            <P />
          </>
        }
      />
    )}
  />
);

export default Body;
