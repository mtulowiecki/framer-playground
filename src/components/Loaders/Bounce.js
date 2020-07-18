import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  padding: 1rem 1rem;
  height: 15rem;
  min-height: 15rem;
  width: 100%;
`;

const ContentWrapper = styled(motion.div)`
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
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: '#672E9B';
`;

const Bounce = ({ color }) => {
  const circleAnimation = {
    y: ['100%', '-100%'],
    backgroundColor: ['#672E9B', '#F86725'],
  };

  const circleTransition = {
    y: {
      yoyo: Infinity,
      ease: 'easeOut',
      duration: 0.4,
    },
    backgroundColor: {
      yoyo: Infinity,
      ease: 'easeOut',
      duration: 0,
      repeatDelay: 0.8,
    },
  };

  return (
    <Wrapper>
      <ContentWrapper color={color}>
        <Circle animate={circleAnimation} transition={circleTransition} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Bounce;
