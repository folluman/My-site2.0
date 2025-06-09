import {
  Body,
  CentralDiv,
  SemiCircle,
  SemiCircle2,
  ImgDiv,
  HeaderDiv,
  IconLigh,
  TextJob,
  Links,
} from "../styles/home.styles";
import {
  BackgroundImage,
  BioContainer,
} from "../styles/sobre.styles";
import Container from "../../../shared/LinksContainers/Containers";
import { Moon, Sun } from "../../../shared/Icons/IconsLight";
import { Linkedin, GitHub } from "../../../shared/Icons/IconsBio";
import { useState, useEffect } from "react";

function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState('')
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const toggleAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setAbout(true);
    setIsContainerVisible(true);
  };

  const darkTxt = "#282828";
  const lightTxt = "#8C8C8C";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.overflow = isContainerVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isContainerVisible]);

  return (
    <Body style={{ backgroundColor: isDarkMode ? "#747474" : "#F2F2F2" }}>
      <div
        style={{
          position: "relative",
          height: "100vh",
          filter: isContainerVisible ? "blur(4px)" : "none",
          transition: "filter 0.3s ease",
          pointerEvents: isContainerVisible ? "none" : "auto",
        }}
      >
        <HeaderDiv>
          <IconLigh>
            <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
              {isDarkMode ? <Sun /> : <Moon />}
              <p style={{ color: isDarkMode ? "White" : "Black" }}>
                {isDarkMode ? "Dark" : "Light"}
              </p>
            </div>
          </IconLigh>
          <TextJob>
            <h1 style={{ color: isDarkMode ? "White" : darkTxt }}>
              Desenvolvedor <br />{" "}
              <span style={{ color: isDarkMode ? darkTxt : lightTxt }}>
                Web
              </span>
            </h1>
          </TextJob>
        </HeaderDiv>

        <CentralDiv>
          <SemiCircle color={isDarkMode ? "White" : "Black"} />
          <SemiCircle2 color={isDarkMode ? "White" : "Black"} />
          <ImgDiv>
            <div></div>
            <h1 style={{ color: isDarkMode ? darkTxt : lightTxt }}>
              Kaue <br />
              <span style={{ color: isDarkMode ? "White" : darkTxt }}>
                Bastos
              </span>
            </h1>
          </ImgDiv>
        </CentralDiv>

        <Links>
          <a
            href="#"
            onClick={toggleAbout}
            style={{ color: isDarkMode ? "White" : "#525252" }}
          >
            Sobre
          </a>
          <a href="#" style={{ color: isDarkMode ? "White" : "#525252" }}>
            Skills
          </a>
          <a href="#" style={{ color: isDarkMode ? "White" : "#525252" }}>
            Projetos
          </a>
        </Links>
      </div>

      {about && (
        <Container 
          light={isDarkMode}
          onClose={() => {
            setAbout(false);
            setIsContainerVisible(false);
          }}
        >
          <BioContainer style={{ color: isDarkMode ? "White" : "Black" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <BackgroundImage />
            </div>
            <div>
              <h2>.Bio</h2>
              <p>
                Jovem com experiência em criação de sites, automações e
                análise de dados. Atua com Python, JavaScript, HTML, CSS, SQL
                e Power BI, desenvolvendo soluções eficientes e
                personalizadas. No backend, utiliza Express para criar APIs e
                integrar sistemas. Possui interesse em inteligência artificial
                e ciência de dados, áreas nas quais vem aprofundando seus
                conhecimentos. Está em constante evolução técnica, sempre
                buscando aplicar soluções criativas aos desafios dos projetos.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginLeft: "4px",
                  marginTop: "2vh",
                }}
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin color={isDarkMode ? "White" : "Black"} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GitHub color={isDarkMode ? "White" : "Black"} />
                </a>
              </div>
            </div>
          </BioContainer>
        </Container>
      )}

      {}
    </Body>
  );
}

export default HomeScreen;