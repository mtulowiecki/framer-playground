import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from 'providers/ThemeModeProvider';

import moon from 'assets/icons/moon.svg';
import clouds from 'assets/icons/clouds.svg';
import stars from 'assets/icons/stars.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 4.5rem;
`;

const Toggle = styled(motion.label)`
  padding: 0.25rem;
  height: 3.5rem;
  width: 7.5rem;
  border-radius: 1.875rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-size: 30% 30%;
  background-position: 70% 50%;
`;

const Circle = styled(motion.span)`
  display: block;
  margin: 0;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.yellow};
  background-repeat: no-repeat;
  background-size: 110% 110%;
  background-position: 50% 50%;
`;

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useTheme();
  const handleToggleChange = () => {
    themeMode === 'dark' && setThemeMode('light');
    themeMode === 'light' && setThemeMode('dark');
  };
  const toggleVariants = {
    light: {
      backgroundColor: '#63A4FF',
      backgroundImage: `url(${clouds})`,
      backgroundPosition: '70% 50%',
    },
    dark: {
      backgroundColor: '#00274F',
      backgroundImage: `url(${stars})`,
      backgroundPosition: '30% 50%',
    },
  };
  const circleVariants = {
    light: {
      x: '0rem',
      backgroundColor: '#FAC900',
      backgroundImage: 'none',
      boxShadow:
        '2px 2px 5px rgba(250, 217, 0, 0.25), -2px -2px 4px rgba(250, 217, 0, 0.25)',
      rotate: -180,
    },
    dark: {
      x: '4rem',
      backgroundColor: '#D3D3D3',
      backgroundImage: `url(${moon})`,
      boxShadow: 'none',
      rotate: 0,
    },
  };
  const toggleTransition = {
    duration: 0.2,
  };
  const circleTransition = {
    duration: 0.2,
  };

  return (
    <Wrapper>
      <Title>Theme toggle</Title>
      <Toggle
        onClick={handleToggleChange}
        initial={themeMode === 'dark' ? 'dark' : 'light'}
        animate={themeMode === 'dark' ? 'dark' : 'light'}
        variants={toggleVariants}
        transition={toggleTransition}
      >
        <Circle
          initial={themeMode === 'dark' ? 'dark' : 'light'}
          animate={themeMode === 'dark' ? 'dark' : 'light'}
          variants={circleVariants}
          transition={circleTransition}
        />
      </Toggle>
      <div />
    </Wrapper>
  );
};

export default ThemeToggle;
