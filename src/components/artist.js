import React from "react"
import { Heading } from 'rebass';
import styled  from 'styled-components';



const Title = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
`;


const DateText = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
    opacity: 0.75;
    text-align: left;
`;

const StyledText = styled(Heading)`
    text-transform: uppercase;
    line-height: .8;
    opacity: 0.75;
`;



export const Artist = (props) => (
    <Title {...props} fontSize={[100,100,201]} />
)


export const Date = (props) => (
    <DateText {...props} as="h4" fontSize={[50,50,71]} />
)


export const Text = (props) => (
    <StyledText {...props} as="h3" fontSize={[35,35,51]} />
)
