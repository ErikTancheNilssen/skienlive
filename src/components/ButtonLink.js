import React from "react";
import Arrow from "../images/arrow.svg";
import { Heading, Image } from "rebass";
import styled from "styled-components";

const ButtonLink = styled(Heading)`
  color: white;
  background: black;
  text-transform: uppercase;

  display: inline-block;
`;

const A = styled.a`
  position: relative;
`;

const Button = props => (
  <A
    target="_blank"
    rel="noopener"
    href="https://skienlive.ticketco.events/no/nb/e/skien_live_2019"
  >
    <ButtonLink
      m={0}
      fontWeight="normal"
      fontSize={[2]}
      py={1}
      px={3}
      target="_parent"
      {...props}
    >
      Kjøp billetter
      <Image alt="->" ml={2} src={Arrow} />
    </ButtonLink>
  </A>
);

export default Button;
