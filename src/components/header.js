import React from "react";

import { Heading, Flex, Box } from "rebass";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink.js";
import Logo from "../components/logo.js";

const Right = styled(Box)`
  flex-grow: 0;
`;

const Left = styled(Box)`
  flex-grow: 1;
`;

const Header = () => (
  <Flex
    flexDirection={["column", "column", "row"]}
    px={[3, 3, 3, 6]}
    pt={[4, 4, 4, 6]}
    mx={[3, 3, 3, 4]}
    mt={[4, 4, 4, 4]}
    mb={6}
    as="header"
  >
    <Left>
      <Logo />
    </Left>
    <Right mt={2}>
      <ButtonLink />
    </Right>
  </Flex>
);

export default Header;
