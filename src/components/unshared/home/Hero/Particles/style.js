import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const ParticleRoot = styled.div`
  display: flex;
  position: absolute;
  top: 1em;
`;

const animate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

const animateReverse = keyframes`
  0%{
    transform: rotate(360deg)
  }
  100%{
    transform: rotate(0deg)
  }
`;

const colorChange = keyframes`
  0%{
    filter: hue-rotate(0deg);
    transform: rotate(0deg)
  }
  100%{
    filter: hue-rotate(360deg);
    transform: rotate(360deg)
  }
`;

export const Glowing = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-origin: right;
  animation: ${colorChange} 5s linear infinite;
  &:nth-child(even) {
    transform-origin: left;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    display: ${({ extra }) => (extra ? "none" : "block")};
  }
`;

export const Particle = styled.span`
  position: absolute;
  top: ${({ num }) => `calc(20px * ${num})`};
  left: ${({ num }) => `calc(20px * ${num})`};
  bottom: ${({ num }) => `calc(20px * ${num})`};
  right: ${({ num }) => `calc(20px * ${num})`};
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    width: 15px;
    height: 15px;
    background: #f00;
    border-radius: 50%;
  }
  &:nth-child(3n + 1) {
    animation: ${animate} 10s alternate infinite;
    ::before {
      background-color: rgba(134, 255, 0, 1);
      box-shadow: 0 0 20px rgba(134, 255, 0, 1), 0 0 40px rgba(134, 255, 0, 1),
        0 0 60px rgba(134, 255, 0, 1), 0 0 80px rgba(134, 255, 0, 1),
        0 0 8px rgba(134, 255, 0, 0.1);
    }
  }

  &:nth-child(3n + 2) {
    animation: ${animateReverse} 10s alternate infinite;
    ::before {
      background-color: rgba(255, 214, 0, 1);
      box-shadow: 0 0 20px rgba(255, 214, 0, 1), 0 0 40px rgba(255, 214, 0, 1),
        0 0 60px rgba(255, 214, 0, 1), 0 0 80px rgba(255, 214, 0, 1),
        0 0 8px rgba(255, 214, 0, 0.1);
    }
  }

  &:nth-child(3n + 3) {
    animation: ${animate} 3s alternate infinite;
    ::before {
      background-color: rgba(0, 266, 255, 1);
      box-shadow: 0 0 20px rgba(0, 266, 255, 1), 0 0 40px rgba(0, 266, 255, 1),
        0 0 60px rgba(0, 266, 255, 1), 0 0 80px rgba(0, 266, 255, 1),
        0 0 8px rgba(0, 266, 255, 0.1);
    }
  }
`;
