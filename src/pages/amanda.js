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
          relativePath: { eq: "artists/horisontal/adelara.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/adelara.jpg" }) {
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
        title="Amanda Delara"
        data={data}
        artist={
          <>
            <Date color="p1">15. JUNI</Date>
            <TitleArtist color="p1">Amanda Delara</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Amanda Delara blir omtalt som{" "}
              <Text as="bold" color="p1">
                «landets mest spennende artist»
              </Text>{" "}
              av P3.no. For et og et halvt år siden slapp hun sin debutlåt, og
              siden det har hun gitt ut flere låter som har blitt streamet
              millioner av ganger, spilt på de største festivalene i landet,
              hatt sine første headliner-shows både i Oslo og i København og
              gitt ut sin debut-EP{" "}
              <Text as="bold" color="p1">
                «Rebel»
              </Text>
              . Nå er hun klar for å gi ut sin andre EP,{" "}
              <Text as="bold" color="p1">
                «Running Deep»
              </Text>
              , 11. mai.
            </P>
            <P>
              Amanda satte sine spor i 2017 med debut-EPen{" "}
              <Text as="bold" color="p1">
                «Rebel»
              </Text>{" "}
              som trillet en femmer på terningen hos både Dagbladet og Gaffa, en
              kritikerrost remix av Karpe Diems{" "}
              <Text as="bold" color="p1">
                «Gunerius»
              </Text>{" "}
              og viktige festivaler i inn- og utland. I vinter spilte hun på Red
              Bull 30 Days i Chicao blant artister som Migos, Khalid og Young
              Thug. Hun vant Gaffa-prisen for årets nykommer, en pris stemt frem
              av folket, og spilte sammen med Karpe Diem på Findingsfestivalen.
              I år står hun der selv med sitt eget show.
            </P>

            <P>
              Hun har i tillegg jobbet mye i studio i både Norge og utlandet, og
              har blant annet jobbet med den Grammy-vinnende stjerneprodusenten
              The-Dream (Rihanna, Beyoncé, Justin Bieber, Kanye West m.fl) i
              Paris, og vi kan forvente å høre resultater av samarbeidet i løpet
              av året. Men aller først kommer EP´n{" "}
              <Text as="bold" color="p1">
                «Running Deep»
              </Text>{" "}
              11. mai, og 15. juni står hun på scenen i Hamburgskuret.
            </P>

            <P>Foto - Bartek Szmigulski</P>
          </>
        }
      />
    )}
  />
);

export default Body;
