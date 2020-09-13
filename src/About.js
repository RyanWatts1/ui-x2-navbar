import React from 'react';
import styled from 'styled-components';


/*const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; */


const Text = styled.p`
  display: block;
  margin-left 6em;
  box-sizing: inherit;
  margin: 15px px 6px;
  color: black;
  width: 800px;
  margin-top: 25px;
  font-size: 20px;
`;

const H2 = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0px;
  font-weight: 600;
  color: black;
  
`;



const About = () => (
  <H2>About RyanCodes</H2>,

  <Text>I am a developer in NC follow my coding jounrey as I chase my dreams.
  </Text>
);

export default About;
