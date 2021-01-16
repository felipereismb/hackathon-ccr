import React from 'react';
import styled, { keyframes } from 'styled-components';

const animeDiv1 = keyframes`
    0% {
    transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const animeDiv3 = keyframes`
    0% {
    transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;

const animeDiv2 = keyframes`
    0% {
    transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #e2e8f0;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    animation: ${animeDiv1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${animeDiv2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${animeDiv2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${animeDiv3} 0.6s infinite;
  }
`;

const EllipsisLoader = () => (
  <Loader>
    <div />
    <div />
    <div />
    <div />
  </Loader>
);

export default EllipsisLoader;
