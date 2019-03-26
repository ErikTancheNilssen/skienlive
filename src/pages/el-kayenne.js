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
          relativePath: { eq: "artists/horisontal/elkayenne.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/elkayenne.jpg" }) {
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
        title="El Kayenne"
        data={data}
        artist={
          <>
            <Date color="p2">14. JUNI</Date>
            <TitleArtist color="p2">El Kayenne</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Gutta frå dei djupe skogar og urbane delar av Telemark vender
              tilbake!
              <Text as="bold" color="p2">
                {" "}
                Fredag 14. juni{" "}
              </Text>
              åpner de årets festival!
            </P>
            <P>
              El Kayenne har det siste året takket høflig nei til alt av
              konserter for fullt fokus på den kommende skiva. Nå er den spilt
              inn og første booking etter dvalen er -{" "}
              <Text as="bold" color="p2">
                Skien Live!
              </Text>{" "}
              Gutta gleder seg vilt til å gå live igjen og vise hva de har
              jobbet med!
            </P>
          </>
        }
      />
    )}
  />
);

export default Body;
