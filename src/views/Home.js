import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0.5rem;
  color: ${({ theme }) => theme.secondary};

  &:nth-child(2) {
    opacity: 0.7;
  }
`;

const Home = () => {
  return (
    <StyledDiv>
      <Title>Framer-motion</Title>
      <Title>playground</Title>
    </StyledDiv>
  );
};

export default Home;
