import React, { useReducer } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 4.5rem;
`;

const Box = styled(motion.div)`
  height: 10rem;
  width: 10rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.turquoise};
  box-shadow: ${({ theme }) => theme.smoothShadow};
`;

const Controls = styled.div`
  margin: 2rem 0;
  width: 90%;
  border-radius: 20px;
  border: ${({ theme }) => theme.gray200} solid 2px;
  box-shadow: ${({ theme }) => theme.smoothShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const InputLabel = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 70%;
`;

const AnimationProps = () => {
  const [values, setValues] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    }
  );

  const handleInputChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <Title>Animation props</Title>
      <div />
      <Box
        animate={{
          x: `${values.x}px`,
          y: `${values.y}px`,
          scale: values.scale,
          rotate: `${values.rotate}deg`,
        }}
      />
      <Controls>
        <InputWrapper>
          <InputLabel htmlFor="x">x</InputLabel>
          <Input
            type="range"
            name="x"
            min="-100"
            max="100"
            value={values.x}
            onChange={(e) => handleInputChange(e)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="y">y</InputLabel>
          <Input
            type="range"
            name="y"
            min="-100"
            max="100"
            value={values.y}
            onChange={(e) => handleInputChange(e)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="scale">scale</InputLabel>
          <Input
            type="range"
            name="scale"
            min="0"
            max="2"
            step="0.01"
            value={values.scale}
            onChange={(e) => handleInputChange(e)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="rotate">rotate</InputLabel>
          <Input
            type="range"
            name="rotate"
            min="-90"
            max="90"
            value={values.rotate}
            onChange={(e) => handleInputChange(e)}
          />
        </InputWrapper>
      </Controls>
    </Wrapper>
  );
};

export default AnimationProps;
