import React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

const Wrapper = styled(motion.div)`
  padding: 1rem;
  margin: 0;
  height: 100%;
  min-width: 100%;
`;

const CardWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.light};
  background-color: ${({ color }) => color};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.smoothShadow};
  scroll-snap-align: center;
  cursor: pointer;
`;

const Content = styled.p`
  font-size: 128px;
  font-weight: 700;
`;

const Card = ({ content, color, onToggleFocus }) => {
  const [animate, cycleCard] = useCycle({}, {});

  return (
    <Wrapper>
      <CardWrapper
        color={color}
        onTap={() => {
          onToggleFocus();
          cycleCard();
        }}
        animate={animate}
      >
        <Content>{content}</Content>
      </CardWrapper>
    </Wrapper>
  );
};

export default Card;
