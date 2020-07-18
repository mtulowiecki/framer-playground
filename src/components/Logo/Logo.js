import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import t from 'assets/icons/t.svg';
import u from 'assets/icons/u.svg';
import l from 'assets/icons/l.svg';
import o from 'assets/icons/o.svg';

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

const LetterBox = styled(motion.div)`
  margin: 0 0.5rem;
  width: 4rem;
  height: 4rem;
  background: url(${({ url }) => url}) no-repeat;
  background-position: 50% 100%;
`;

const Logo = () => {
  const wrapperVariants = {
    start: { transition: { staggerChildren: 0.1 } },
    end: { transition: { staggerChildren: 0.1 } },
  };
  const circleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '50%',
    },
  };

  const circleTransition = {
    yoyo: Infinity,
    ease: 'easeIn',
    duration: 0.4,
  };

  return (
    <ContentWrapper variants={wrapperVariants} initial="start" animate="end">
      <LetterBox
        url={t}
        variants={circleVariants}
        transition={circleTransition}
      />
      <LetterBox
        url={u}
        variants={circleVariants}
        transition={circleTransition}
      />
      <LetterBox
        url={l}
        variants={circleVariants}
        transition={circleTransition}
      />
      <LetterBox
        url={o}
        variants={circleVariants}
        transition={circleTransition}
      />
    </ContentWrapper>
  );
};

export default Logo;
