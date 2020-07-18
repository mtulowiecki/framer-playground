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

const StyledSvg = styled.svg`
  height: 4rem;
  width: 4rem;
`;

const Circle = styled(motion.path)`
  fill: none;
  stroke: ${({ theme }) => theme.red};
  stroke-width: 0.5rem;
  stroke-linecap: round;
`;

const LazyCircleLoader = ({ color }) => {
  const circleAnimation = {
    pathLength: [0, 0.25, 0],
    rotate: [90, 0, -270],
  };
  const circleTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
  };
  return (
    <Wrapper>
      <ContentWrapper color={color}>
        <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <Circle
            d="M 50, 50m -43, 0a 43,43 0 1,0 86,0a 43,43 0 1,0 -86,0"
            animate={circleAnimation}
            transition={circleTransition}
          />
        </StyledSvg>
      </ContentWrapper>
    </Wrapper>
  );
};

export default LazyCircleLoader;
