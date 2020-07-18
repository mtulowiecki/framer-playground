import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.ul)`
  display: block;
  margin: 0;
  padding: 0;
  text-indent: 0;
  scrollbar-width: none;
  overflow: scroll;
`;

const Item = styled(motion.li)`
  margin: 1rem;
  border: solid ${({ color }) => color} 1px;
  list-style-type: none;
  border-radius: 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 2rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.25rem;
  text-decoration: none;
`;

const ItemList = ({ isOpen, toggleOpen, items, className }) => {
  const wrapperVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      duration: 0.01,
    },
    closed: {
      y: 50,
      opacity: 0,
      duration: 0.01,
    },
  };
  return (
    <Wrapper className={className} variants={wrapperVariants}>
      {items.map(({ title, slug, color }) => (
        <Item key={slug} color={color} variants={itemVariants}>
          <StyledLink to={`/${slug}`} onClick={toggleOpen}>
            {title}
          </StyledLink>
        </Item>
      ))}
    </Wrapper>
  );
};

export default ItemList;
