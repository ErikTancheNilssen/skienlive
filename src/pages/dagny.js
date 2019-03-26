import React from "react";
import { Text } from "rebass";
import ArtistPage from "../components/ArtistPage.js";
import { StaticQuery, graphql } from "gatsby";
import { TitleArtist, Date, P } from "../components/artist.js";

const Body = () => (
  <StaticQuery
    query={graphql`
      query {
        horisontal: file(relativePath: { eq: "artists/horisontal/dagny.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/dagny.jpg" }) {
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
        title="Dagny"
        data={data}
        artist={
          <>
            <Date color="p1">15. JUNI</Date>
            <TitleArtist color="p1">Dagny</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Få artister treffer publikum like umiddelbart som Dagny, både når
              det kommer til hennes energiske sceneopptredener og fengslende
              poplåter.
            </P>
            <P>
              Sangfuglen fra nord sendte sjokkbølger gjennom bransje og publikum
              da hun slapp{" "}
              <Text as="bold" color="p1">
                «Backbeat»
              </Text>{" "}
              høsten 2015, og siden den gang har hun bygget seg opp til å bli en
              av landets mest spennende liveartister, låtskrivere og
              popsnekrere, med en katalog som har over 200 millioner
              strømminger.
            </P>
            <P>
              Blant hennes mange meritter var hun{" "}
              <Text as="bold" color="p1">
                Vevos One to watch
              </Text>{" "}
              i 2017, og Dagny har vært{" "}
              <Text as="bold" color="p1">
                P3 Gull
              </Text>{" "}
              og Spellemann- nominert en rekke ganger. I år kan hun stikke av
              med prisen for beste låt med Seeb for{" "}
              <Text as="bold" color="p1">
                «Drink About»
              </Text>{" "}
              og prisen for{" "}
              <Text as="bold" color="p1">
                årets låtskriver
              </Text>{" "}
              på Spellemann 2018.
            </P>
            <P>
              Hun har skrevet med låtskrivere som Ludvig Söderberg (Tove Lo,
              Ellie Goulding) og Jason Gill, og resultatet har så langt blitt en
              hitparade med singler som{" "}
              <Text as="bold" color="p1">
                «Wearing Nothing»
              </Text>{" "}
              (2017),{" "}
              <Text as="bold" color="p1">
                «Love You Like That»
              </Text>{" "}
              (2017) og{" "}
              <Text as="bold" color="p1">
                «Used To You»
              </Text>{" "}
              (2018). Dagny forteller at hun har blitt stadig mer opptatt av
              tekst. Hvis ikke teksten taler til henne, er det vanskeligere å
              føle noe for låta.
            </P>
            <P>
              Våren 2018 var Dagny på sin første headlinerturné i USA, og etter
              en intensiv festivalsommer reiste hun på høstturné i Europa med
              Lemaitre. 2019 ser ikke ut til å bli mindre travelt. Denne
              vinteren gjør Dagny sin største norgesturné hittil, med utsolgte
              konserter over store deler av landet, inkludert Sentrum Scene i
              Oslo og ekstrakonserter i Tromsø og Trondheim.
            </P>
            <P>
              Dagny slipper{" "}
              <Text as="bold" color="p1">
                «Hit Your Heart»
              </Text>{" "}
              med Steve Aioki 8. mars og kommer til Skien Live 15. juni.
            </P>
          </>
        }
      />
    )}
  />
);

export default Body;
