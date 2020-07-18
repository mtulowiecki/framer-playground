import React from 'react';
import styled from 'styled-components';

import Navbar from 'components/Navbar/Navbar';

const Wrapper = styled.div`
  position: relative;
  width: 23rem;
  height: 49rem;
`;

const UserTemplate = ({ items, children }) => (
  <Wrapper>
    <Navbar items={items} />
    {children}
  </Wrapper>
);

export default UserTemplate;
