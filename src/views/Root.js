import React from 'react';
import { Router } from '@reach/router';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

import UserTemplate from 'templates/UserTemplate/UserTemplate';
import Home from 'views/Home';
import Swipe from 'views/Swipe';
import Loaders from 'views/Loaders';
import AnimationProps from 'views/AnimationProps';
import ThemeToggle from 'views/ThemeToggle';

const items = [
  {
    title: 'Home',
    slug: '',
    color: '#43BCCD',
  },
  {
    title: 'Theme toggle',
    slug: 'theme-toggle',
    color: '#F86725',
  },
  {
    title: 'Loaders',
    slug: 'loaders',
    color: '#672E9B',
  },
  {
    title: 'Swipe gallery',
    slug: 'swipe',
    color: '#EB3547',
  },
  {
    title: 'Animation Props',
    slug: 'animation-props',
    color: '#F9C80D',
  },
];

const Root = () => {
  return (
    <MainTemplate>
      <UserTemplate items={items}>
        <Router style={{ height: '100%' }}>
          <Home path="/" />
          <Swipe path="/swipe" />
          <Loaders path="/loaders" />
          <AnimationProps path="/animation-props" />
          <ThemeToggle path="/theme-toggle" />
        </Router>
      </UserTemplate>
    </MainTemplate>
  );
};

export default Root;
