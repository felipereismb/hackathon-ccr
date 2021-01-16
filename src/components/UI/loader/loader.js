import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${props => (props.color ? props.color : '#3498db')};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  -webkit-animation: ${animate} 2s linear infinite; /* Safari */
  animation: ${animate} 2s linear infinite;
`;

const Loader = ({ color }) => <Loading color={color} />;

export default Loader;
