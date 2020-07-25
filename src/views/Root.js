import React from 'react';
import { Router } from '@reach/router';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

import UserTemplate from 'templates/UserTemplate/UserTemplate';
import Home from 'views/Home';
import ThemeToggle from 'views/ThemeToggle';
import Blob from 'views/Blob';
// import Todo from 'views/Todo';
import Loaders from 'views/Loaders';
import Swipe from 'views/Swipe';
import AnimationProps from 'views/AnimationProps';

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
  // {
  //   title: 'To-Do List',
  //   slug: 'to-do',
  //   color: '#F9C80D',
  // },
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
    title: 'Organic blob',
    slug: 'blob',
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
          <ThemeToggle path="/theme-toggle" />
          <Blob path="/blob" />
          {/* <Todo path="/to-do" /> */}
          <Loaders path="/loaders" />
          <Swipe path="/swipe" />
          <AnimationProps path="/animation-props" />
        </Router>
      </UserTemplate>
    </MainTemplate>
  );
};

export default Root;
