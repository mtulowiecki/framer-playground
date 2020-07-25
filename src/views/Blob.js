import React from 'react';
import styled from 'styled-components';

import Blob from 'components/Blob/Blob';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 4.5rem;
`;

const StyledBlob = styled(Blob)`
  width: 80%;
`;

const Swipe = () => {
  return (
    <Wrapper>
      <Title>Blob</Title>
      <StyledBlob />
    </Wrapper>
  );
};

export default Swipe;
