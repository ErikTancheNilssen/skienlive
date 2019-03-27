import React from "react";
import { Heading, Text as ReBassText } from "rebass";
import styled, { withTheme } from "styled-components";
import { setLightness } from "polished";

const Title = styled(Heading)`
  text-transform: uppercase;
  line-height: 0.8;
  a {
    color: white;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const DateText = styled(Heading)`
  text-transform: uppercase;
  line-height: 0.8;
  transition: color 2s ease;
  text-align: left;
`;

const StyledText = styled(Heading)`
  text-transform: uppercase;
  line-height: 0.8;
  transition: color 2s ease;
`;

const BodyText = styled(ReBassText)`
  font-family: Vollkorn-Regular;
  font-size: 20.97px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.25px;
`;

export const Artist = withTheme(props => (
  <Title {...props} fontSize={[80, 80, 100, 201]} />
));

export const P = props => (
  <BodyText
    {...props}
    mb={5}
    mt={2}
    fontSize={[1]}
    color="body"
    fontFamily="Vollkorn"
  />
);

export const TitleArtist = props => (
  <Title {...props} fontSize={[100, 100, 131]} />
);

export const Date = withTheme(props => (
  <DateText
    {...props}
    color={setLightness(
      0.8,
      props.theme.colors[props.color] || props.theme.mainColor
    )}
    as="h4"
    fontSize={[50, 50, 71]}
  />
));

export const Text = props => (
  <StyledText {...props} as="h3" fontSize={[35, 35, 51]} />
);
