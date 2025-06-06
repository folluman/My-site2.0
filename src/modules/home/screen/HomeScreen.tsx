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
  SobreContainer,
  CloseContainer,
  BackgroundImage,
  BioContainer,
} from "../styles/sobre.styles";

import { Moon, Sun } from "../../../shared/Icons/IconsLight";
import { Close } from "../../../shared/Icons/IconClose";
import { Linkedin, GitHub } from "../../../shared/Icons/IconsBio";

import { useState } from "react";

function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [about, setAbout] = useState("");

  const toggleAbout = (e: any) => {
    e.preventDefault();
    setAbout("visible");
  };

  const darkTxt = "#282828";
  const lightTxt = "#8C8C8C";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Body style={{ backgroundColor: isDarkMode ? "#747474" : "#F2F2F2" }}>
        <div
          style={{
            position: "relative",
            height: "100vh",
            filter: about === "" ? "" : "blur(4px)",
          }}
        >
          <HeaderDiv>
            <IconLigh>
              <div
                onClick={() => {
                  console.log("clicado");
                  toggleTheme();
                }}
              >
                {isDarkMode ? <Sun /> : <Moon />}
                <p style={{ color: isDarkMode ? "White" : "Black" }}>Light</p>
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
              <div> </div>
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
              href=""
              onClick={(e) => toggleAbout(e)}
              style={{ color: isDarkMode ? "White" : "#525252" }}
            >
              Sobre
            </a>
            <a href="" style={{ color: isDarkMode ? "White" : "#525252" }}>
              Skills
            </a>
            <a href="" style={{ color: isDarkMode ? "White" : "#525252" }}>
              Projetos
            </a>
          </Links>
        </div>
        {about === "visible" && (
          <SobreContainer
            style={{ backgroundColor: isDarkMode ? "#434343" : "#EDEDED" }}
          >
            <CloseContainer onClick={() => setAbout("")}>
              <Close color={isDarkMode ? "White" : "Black"} />
            </CloseContainer>
            <BioContainer style={{color: isDarkMode ? "White" : "Black"}}>
              <div style={{ display: 'flex', justifyContent: "center"}}>
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
                <div style={{ display: "flex", gap: '30px', marginLeft: '4px', marginTop: '2vh'}}>
                  <a href=""><Linkedin color={isDarkMode ? "White" : "Black"}/></a>
                  <a href=""><GitHub color={isDarkMode ? "White" : "Black"}/></a>
                </div>
              </div>
            </BioContainer>
          </SobreContainer>
        )}
      </Body>
    </>
  );
}

export default HomeScreen;
