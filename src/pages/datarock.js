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
          relativePath: { eq: "artists/horisontal/datarock.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vertikal: file(relativePath: { eq: "artists/vertikal/datarock.jpg" }) {
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
        title="Datarock"
        data={data}
        artist={
          <>
            <Date color="p3">15. JUNI</Date>
            <TitleArtist color="p3">Datarock</TitleArtist>
          </>
        }
        content={
          <>
            <P>
              Joggedresser, dansbare hits, elleville liveshow og generelt god
              stemning. Det er ikke rart at DATAROCK fra Bergen har vært et av
              landets mest populære band i snart en mannsalder.
            </P>
            <P>
              I mars gav de ut <q>Face the Brutality</q>, deres første
              studioalbum på 9 år. Anmelderne trillet 5 av 6 i både Dagbladet,
              Aftenposten, Hamar Arbeiderblad, BT og GAFFA, og i utlandet høstet
              platen 7 av 10 i danske Diskant, 4 av 5 i Classic Pop Mag og 5 av
              5 i Music News.
            </P>
            <P>
              Frontet av den sjeldent karismatiske vokalisten Fredrik Saroea har
              gutta bak monsterhits som{" "}
              <Text as="bold" color="p3">
                «Fa-Fa-Fa»
              </Text>
              ,{" "}
              <Text as="bold" color="p3">
                «Computer Camp Love»
              </Text>{" "}
              og
              <Text as="bold" color="p3">
                «Give It Up»
              </Text>{" "}
              skapt store bølger, både her hjemme og ute i den store verden.
              Deres helt unike form for elektropop har sørget for en stadig
              voksende fanskare, og bandets låter har bl.a. blitt brukt i
              reklamer for Apple, Coca-Cola, Microsoft, Samsung og Google, i
              dataspill som FIFA-serien og{" "}
              <Text as="bold" color="p3">
                «The Sims»
              </Text>
              , samt i TV-programmer som{" "}
              <Text as="bold" color="p3">
                «Workaholics»
              </Text>{" "}
              og{" "}
              <Text as="bold" color="p3">
                «Vampire Diaries»
              </Text>
              .
            </P>
            <P>
              DATAROCK må også regnes som et av Norges mest internasjonalt
              anerkjente band. Deres 1000 konserter i 36 land inkluderer 20
              turneer i USA, 8 i Australia – og konserter på festivaler som
              Coachella, Lollapalooza, Reading & Leeds, Summer Sonic, Hurricane,
              Sónar og Roskilde.
            </P>
            <P>Lørdag 15. juni kommer til de til Skien og Hamburgskuret.</P>
          </>
        }
      />
    )}
  />
);

export default Body;
