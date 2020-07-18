import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from 'utils';

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
  margin: 0 0.125rem;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const Common = ({ color }) => {
  const wrapperVariants = {
    start: { transition: { staggerChildren: 0.2 } },
    end: { transition: { staggerChildren: 0.25 } },
  };
  const circleVariants = {
    start: {
      y: '-75%',
    },
    end: {
      y: '75%',
    },
  };

  const circleTransition = {
    yoyo: Infinity,
    ease: 'easeIn',
    duration: 0.4,
  };

  return (
    <Wrapper>
      <ContentWrapper
        color={color}
        variants={wrapperVariants}
        initial="start"
        animate="end"
      >
        <Circle
          color={colors.red}
          variants={circleVariants}
          transition={circleTransition}
        />
        <Circle
          color={colors.orange}
          variants={circleVariants}
          transition={circleTransition}
        />
        <Circle
          color={colors.yellow}
          variants={circleVariants}
          transition={circleTransition}
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Common;
