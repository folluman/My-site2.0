import styled, { keyframes } from "styled-components";

import mePng from "../../../../public/me.png";
import mePng720 from "../../../../public/me720px.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotate2 = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;

  @media (min-width: 720px) {
    padding: 40px;
  }
`;

export const TextJob = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const IconLigh = styled.div`
  text-align: center;
  p {
    font-size: 0.6rem;
  }
`;

export const CentralDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  position: relative;
  @media (min-width: 720px) {
    height: 25vh;
  }
`;

export const SemiCircle = styled.div<{ color?: string }>`
  width: 340px;
  height: 170px;
  border: 3px dashed ${({ color }) => color || "black"};
  clip-path: inset(0 0 50% 0);
  border-radius: 170px 170px 0 0;
  animation: ${rotate} 10s linear infinite;
  transform-origin: center bottom;
  position: absolute;

  @media (min-width: 720px) {
    width: 66vh;
    height: 33vh;
    border-radius: 66vh 66vh 0 0;
  }
`;

export const SemiCircle2 = styled.div<{ color?: string }>`
  width: 320px;
  height: 160px;
  border: 3px dashed ${({ color }) => color || "black"};
  clip-path: inset(0 0 50% 0);
  border-radius: 160px 160px 0 0;
  animation: ${rotate2} 6s linear infinite;
  transform-origin: center bottom;

  @media (min-width: 720px) {
    width: 62vh;
    height: 31vh;
    border-radius: 62vh 62vh 0 0;
    animation: ${rotate2} 8s linear infinite;
  }
`;

export const ImgDiv = styled.div`
  position: absolute;
  top: 40%;
  display: flex;
  align-items: center;
  padding-left: 40px;

  div {
    width: 180px;
    height: 250px;
    background-image: url(${mePng});
    background-repeat: no-repeat;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (min-width: 720px) {
    top: 20%;

    div {
      background-image: url(${mePng720});
      background-size: 30vh;
      width: 30vh;
      height: 50vh;
    }
    h1 {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`;

export const Links = styled.div`
  position: absolute;
  top: 70%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 20px;
  font-size: 1.2rem;

  @media (min-width: 720px) {
    top: 4%;
    right: 5%;
  }
`;
