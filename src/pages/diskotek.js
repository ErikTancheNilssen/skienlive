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
          relativePath: { eq: "artists/horisontal/diskotek.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/diskotek.jpg" }) {
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
        title="Diskotek"
        data={data}
        artist={
          <>
            <Date color="p3">15. JUNI</Date>
            <TitleArtist color="p3">Diskotek</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Diskotek synes det var så stor stas med et comeback på scenen
              foran et engasjert og feststemt publikum på Parbiografen i Skien.
              Når forespørselen kom om å gjenta suksessen under årets utgave av
              Skien Live, svarte gutta i Diskotek, unisont ja!
            </P>
            <P>
              Diskotek lanserte nylig 2 helt nye låter, og lover mer ny musikk i
              forkant av Skien Live festivalen. Synthpop bandet Diskotek slapp 3
              album og spilte inn- og utland sammen med band som White Lies,
              Donkeyboy m.fl. Med sin Schizofrene sound vet man aldri helt hva
              man får bortsett fra at det er melodiøst og fengende.
            </P>
            <Heading fontFamily="Vollkorn" fontSize={2}>
              Diskotek:
            </Heading>
            <P>
              Kristian Lorentzen - Vokal & Bass Jan Thomas Moen - Vokal, Gitar &
              Programmering Einar Andre Rørvik - Synth & Programmering Ottar
              Annfelt Moe - Trommer
            </P>
            <Heading fontFamily="Vollkorn" fontSize={2}>
              Diskotek i media:
            </Heading>
            <P>
              <q>
                Dette er et popalbum som er umulig å avfeie for alle oss som
                digger kommersiell og fengende pop
              </q>{" "}
              - Rune Slyngstad (Rana Blad).
            </P>
            <P>
              <Text color="p3" as="a" href="http://www.diskotek.org">
                www.diskotek.org
              </Text>
              {",  "}
              <Text
                color="p3"
                as="a"
                href="http://www.facebook.com/diskotekband"
              >
                Facebook
              </Text>
              {",  "}
              <Text color="p3" as="a" href="www.instagram.com/diskotekmusic">
                Instagram
              </Text>
            </P>
            <P>
              <q>Flott, sukkersøtt og en smule schizofrent</q>
              <br />- Stein Østbø (VG)
            </P>
            <P>
              <q>
                Do you need a fix of radio friendly, catchy electronic pop?
                Well, look no further, because Diskotek is here to satisfy you
              </q>{" "}
              <br />- Johan Carlsson (Release Magazine)
            </P>
            <P>
              <q>Sukkersøtt og umiddelbart fengende</q>. Blant årets 5 beste
              skiver <br />- Hedda Klemetzen (Romerikets blad)
            </P>
            <P>
              <q>
                Diskotek byr på lettbeinte, upretensiøse låter som allerede
                etter en gjennomlytting sitter klistret i øregangene
              </q>
              <br />- Ida de Rosa (Universitas)
            </P>
          </>
        }
      />
    )}
  />
);

export default Body;
