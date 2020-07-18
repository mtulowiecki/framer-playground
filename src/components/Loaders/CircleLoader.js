import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  padding: 1rem 1rem;
  height: 15rem;
  min-height: 15rem;
  width: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: ${({ color }) => color} solid 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.smoothShadow};
`;

const Circle = styled(motion.span)`
  height: 4rem;
  width: 4rem;
  border: solid ${({ theme }) => theme.gray100} 0.5rem;
  border-top: solid ${({ theme }) => theme.turquoise} 0.5rem;
  border-radius: 50%;
`;

const CircleLoader = ({ color }) => {
  const circleTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 0.5,
  };
  return (
    <Wrapper>
      <ContentWrapper color={color}>
        <Circle animate={{ rotate: 360 }} transition={circleTransition} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default CircleLoader;
