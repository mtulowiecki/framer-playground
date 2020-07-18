import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import Hamburger from 'components/Hamburger/Hamburger';
import ItemList from 'components/ItemList/ItemList';

const Wrapper = styled(motion.nav)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 18rem;
  z-index: 100;
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.tertiary};
  opacity: 0.9;
`;

const StyledHamburger = styled(Hamburger)`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  transform: translate(-50%, -50%);
`;

const StyledItemList = styled(ItemList)`
  position: absolute;
  top: 5rem;
  bottom: 0;
  width: 100%;
`;

const Navbar = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const wrapperVariants = {
    open: {
      top: 0,
      bottom: 0,
      left: 0,
      width: '18rem',
      transition: { duration: 0 },
    },
    closed: {
      top: 0,
      bottom: '91%',
      left: 0,
      width: '4rem',
      transition: { duration: 0, when: 'afterChildren' },
    },
  };
  const background = {
    open: (custom = 49) => ({
      clipPath: `circle(${custom * 2}rem at 2.5rem 2.5rem)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(1.5rem at 2.5rem 2.5rem)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <Wrapper
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={wrapperVariants}
      custom={49}
      ref={containerRef}
    >
      <Background variants={background} />
      <StyledHamburger toggle={() => toggleOpen()} />
      <StyledItemList items={items} isOpen={isOpen} toggleOpen={toggleOpen} />
    </Wrapper>
  );
};

export default Navbar;
