import React from 'react';
import styled from 'styled-components';
import { colors } from 'utils';
import { motion, useCycle } from 'framer-motion';

import Card from 'components/Card/Card';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 4.5rem;
`;

const CardContainer = styled(motion.div)`
  position: relative;
  height: 23rem;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  overflow: auto;
  z-index: 99;
`;

const cards = [
  {
    content: '1',
    color: colors.turquoise,
  },
  {
    content: '2',
    color: colors.purple,
  },
  {
    content: '3',
    color: colors.red,
  },
  {
    content: '4',
    color: colors.orange,
  },
  {
    content: '5',
    color: colors.yellow,
  },
];

const Swipe = () => {
  const [animate, toggleFocus] = useCycle(
    {
      y: '0rem',
      scale: 1,
      overflow: 'auto',
      zIndex: 99,
      transition: {
        zIndex: { duration: 0 },
        duration: 0.1,
      },
    },
    {
      y: '0',
      scale: 2.4,
      overflow: 'hidden',
      zIndex: 101,
      transition: {
        zIndex: { duration: 0 },
        duration: 0.1,
      },
    }
  );

  return (
    <Wrapper>
      <Title>Swipe gallery</Title>
      <p />
      <CardContainer animate={animate}>
        {cards.map((card) => (
          <Card {...card} onToggleFocus={toggleFocus} key={card.content} />
        ))}
      </CardContainer>
      <p style={{ alignSelf: 'center' }}>tap to expand</p>
    </Wrapper>
  );
};

export default Swipe;
