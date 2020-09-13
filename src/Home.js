import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
display: block;
margin-left 6em;
box-sizing: inherit;
margin: 4px px 6px;
color: black;
width: 800px;
margin-top: 25px;
font-size: 20px;
`;
const Home = (props) => (
  <GridWrapper>
<p>Home page for RyanCodes.</p>
  </GridWrapper>
)

export default Home;