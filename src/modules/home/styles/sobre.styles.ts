import styled from "styled-components";

import ImageBio from "../../../assets/imageBio.png";
import ImageBio720 from "../../../assets/imageBio720.png";

export const ContainerView = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 90%;
  height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
  max-height: 100%;
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
  cursor: pointer;
  z-index: 10;
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4vh 2vh;
  position: relative;

  h2 {
    font-size: 4vh;
    font-weight: 300;
    margin: 2vh 0 1vh 0;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    hyphens: auto;
    line-height: 20px;
  }

  @media (min-width: 720px) {
    p {
    font-size: 1.4rem;
    line-height: 30px;
  }
  }

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 10vh;
    p {
      font-size: 1.2rem;
      line-height: 30px;
    }
  }
`;

export const BackgroundImage = styled.div`
  height: 25vh;
  width: 25vh;
  background-image: url(${ImageBio});
  background-size: 25vh;
  background-repeat: no-repeat;
  @media (min-width: 720px) {
    height: 430px;
    width: 420px;
    background-image: url(${ImageBio720});
    background-size: 400px;
  }
`;
