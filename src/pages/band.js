import React from "react";
import { Text } from "rebass";
import ArtistPage from "../components/ArtistPage.js";
import { StaticQuery, graphql } from "gatsby";
import { TitleArtist, Date } from "../components/artist.js";

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
        title="The Band"
        data={data}
        artist={
          <>
            <Date>14. JUNI</Date>
            <TitleArtist>The Dogs</TitleArtist>
          </>
        }
        content={
          <>
            <Text
              mb={3}
              fontSize={[1, 1, 1, 2]}
              color="body"
              fontFamily="Vollkorn"
            >
              hi
            </Text>
          </>
        }
      />
    )}
  />
);

export default Body;
