import React from "react"
import { Heading } from 'rebass';
import styled, { withTheme } from 'styled-components';
import { setLightness } from 'polished';


const Title = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
`;


const DateText = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
    transition: color 2s ease;
    text-align: left;
`;

const StyledText = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
    transition: color 2s ease;
`;



export const Artist = (props) => (
    <Title {...props} fontSize={[100,100,201]} />
)


export const Date = withTheme((props) => (
    <DateText {...props} color={setLightness(0.8, props.theme.mainColor)} as="h4" fontSize={[50,50,71]} />
))


export const Text = (props) => (
    <StyledText {...props} as="h3" fontSize={[35,35,51]} />
)
