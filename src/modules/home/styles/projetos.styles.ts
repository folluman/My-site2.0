import styled from "styled-components";

export const ProjectsContainer = styled.div`
  .projects_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 5vh;
    margin-top: 40px;
    @media (min-width: 1080px) {
     
    }
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .project__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    max-width: 80vw;

    @media (min-width: 1080px) {
      flex-direction: row;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 900px
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 600;
    }

    p {
      text-align: justify;
      hyphens: auto;
      font-size: 1.2rem;
    }

    a {
      color: gray;
      font-size: 1.2rem;
    }

    @media (min-width: 720px) {
      img {
        max-width: 400px;
      }
    }
  }

  .reverse {
    @media (min-width: 1080px) {
        flex-direction: row-reverse;
    }
  }
`;
