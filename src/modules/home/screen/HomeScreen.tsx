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
import { SkillsContainer } from "../styles/skills.styles";
import { BackgroundImage, BioContainer } from "../styles/sobre.styles";
import Container from "../../../shared/LinksContainers/Containers";
import { Moon, Sun } from "../../../shared/Icons/IconsLight";
import { Linkedin, GitHub } from "../../../shared/Icons/IconsBio";
import { useState, useEffect } from "react";
import { IconDownload } from "../../../shared/Icons/IconDownload";

function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const toggleAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setAbout(true);
    setIsContainerVisible(true);
  };

  const toggleSkills = (e: React.MouseEvent) => {
    e.preventDefault();
    setSkills(true);
    setIsContainerVisible(true);
  };

  const darkTxt = "#282828";
  const lightTxt = "#8C8C8C";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.overflow = isContainerVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isContainerVisible]);

  const handleDownload = () => {};

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
          <div style={{ position: "absolute", bottom: "5vh", right: "5vw" }}>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: isDarkMode ? "White" : "#525252",
                textDecoration: "none",
              }}
              href="/MY_SITE/public/Curriculo_Kaue_Bastos.pdf"
              download="Curriculo_Kaue_Bastos"
              onClick={(e) => {
                e.preventDefault();
                window.open("/Curriculo_Kaue_Bastos.pdf", "_blank");
                fetch("/Curriculo_Kaue_Bastos.pdf")
                  .then((response) => response.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "Curriculo_Kaue_Bastos.pdf";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                  });
              }}
            >
              <IconDownload color={isDarkMode ? "White" : "Black"} /> Currículo
            </a>
          </div>
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
          <a
            href="#"
            style={{ color: isDarkMode ? "White" : "#525252" }}
            onClick={toggleSkills}
          >
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
                Jovem com experiência em criação de sites, automações e análise
                de dados. Atua com Python, JavaScript, HTML, CSS, SQL e Power
                BI, desenvolvendo soluções eficientes e personalizadas. No
                backend, utiliza Express para criar APIs e integrar sistemas.
                Possui interesse em inteligência artificial e ciência de dados,
                áreas nas quais vem aprofundando seus conhecimentos. Está em
                constante evolução técnica, sempre buscando aplicar soluções
                criativas aos desafios dos projetos.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginLeft: "4px",
                  marginTop: "2vh",
                }}
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin color={isDarkMode ? "White" : "Black"} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub color={isDarkMode ? "White" : "Black"} />
                </a>
              </div>
            </div>
          </BioContainer>
        </Container>
      )}

      {skills && (
        <Container
          light={isDarkMode}
          onClose={() => {
            setSkills(false);
            setIsContainerVisible(false);
          }}
        >
          <SkillsContainer
            color={isDarkMode ? "#C4C3C3" : "#747474"}
            style={{ color: isDarkMode ? "White" : "Black" }}
          >
            <div className="skills_title">
              <h2>Skills</h2>
            </div>
            <div className="skills_content">
              <div>
                <h3>Comunicação</h3>
                <p>
                  Sou uma pessoa aberta a conversas, o que me permite me
                  comunicar de forma clara e acessível com diferentes perfis.
                  Essa abertura facilita o trabalho em equipe e contribui para
                  um ambiente colaborativo, onde todos se sentem à vontade para
                  trocar ideias e seguir na mesma direção.
                </p>
              </div>
              <div>
                <h3>Trabalho em equipe</h3>
                <p>
                  Gosto de trabalhar em equipe e estou sempre aberto a aprender
                  com diferentes ideias e perspectivas. Acredito que colaborar
                  com pessoas de diferentes áreas enriquece os projetos e
                  contribui para alcançar bons resultados em grupo.
                </p>
              </div>
              <div>
                <h3>Adaptabilidade</h3>
                <p>
                  Durante a minha vida desenvolvi resiliência, pois acredito que
                  é nas dificuldades que mais se aprende. Essa postura me ajuda
                  a enfrentar situações dinâmicas com confiança, buscando
                  soluções criativas e me ajustando rapidamente a novas
                  circunstâncias.
                </p>
              </div>
            </div>
          </SkillsContainer>
        </Container>
      )}
    </Body>
  );
}

export default HomeScreen;
