import React from 'react';
import styled from 'styled-components';
import { colors } from 'utils';

import Common from 'components/Loaders/Common';
import Bounce from 'components/Loaders/Bounce';
import CircleLoader from 'components/Loaders/CircleLoader';
import LazyCircleLoader from 'components/Loaders/LazyCircleLoader';

const Wrapper = styled.div`
  padding-top: 4.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 4.5rem;
`;

const Loaders = () => (
  <Wrapper>
    <Title>Loading...</Title>
    <LazyCircleLoader color={colors.orange} />
    <CircleLoader color={colors.red} />
    <Bounce color={colors.purple} />
    <Common color={colors.turquoise} />
  </Wrapper>
);

export default Loaders;
