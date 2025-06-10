import styled from "styled-components";

export const SkillsContainer = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
  gap: 40px;

  .skills_title {
    font-size: 36px;
  }

  .skills_content {
    display: flex;
    flex-direction: column;
    gap: 5vw;

    div {
      max-width: 320px;
      text-align: justify;
      padding: 10px;

      h3 {
        font-size: 24px;
        position: relative;
        padding-bottom: 8px;
        font-weight: 300;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 50%;
          height: 2px;
          background-color: ${(props) => props.color};
        }
      }
      p {
        margin-top: 10px;
        font-weight: 300;
        line-height: 20px;
        hyphens: auto;
      }
    }

    @media (min-width: 1080px) {
      flex-direction: row;
    }
  }
`;
