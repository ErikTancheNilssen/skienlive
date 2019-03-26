import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { backgroundImage } from "styled-system";

const Card = styled(Flex)`
  ${backgroundImage}
  background-position: 50% 50%;
  background-size: cover;
`;

const ArtistCard = props => (
  <Card
    {...props}
    backgroundImage={[
      `url(${props.data.vertikal.childImageSharp.fluid.src})`,
      `url(${props.data.vertikal.childImageSharp.fluid.src})`,
      `url(${props.data.vertikal.childImageSharp.fluid.src})`,
      `url(${props.data.horisontal.childImageSharp.fluid.src})`
    ]}
  />
);
export default ArtistCard;
