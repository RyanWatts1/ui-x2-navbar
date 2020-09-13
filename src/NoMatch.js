import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
const NoMatch = () => (
  <Wrapper>
    <h2> 404 error page not found </h2>
  </Wrapper>
)

export default NoMatch;