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
import { useState } from "react";
import { IconDownload } from "../../../shared/Icons/IconDownload";
import { ProjectsContainer } from "../styles/projetos.styles";
import ImgColetaCerta from "../../../assets/coletaCertaimg.png";
import PrototipoApp from "../../../assets/protótipoApp.png";
import EdChurrascoImg from "../../../assets/edChurrasco.svg";
import ApemegImg from "../../../assets/apemeg.png";

function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
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

  const toggleProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    setProjects(true);
    setIsContainerVisible(true);
  };

  const darkTxt = "#282828";
  const lightTxt = "#8C8C8C";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
              {isDarkMode ? <Moon /> : <Sun />}
              <p style={{ color: isDarkMode ? "White" : "Black" }}>
                {isDarkMode ? "Dark" : "Light"}
              </p>
            </div>
          </IconLigh>
          <TextJob>
            <h1 style={{ color: isDarkMode ? "White" : darkTxt }}>
              Desenvolvedor <br />
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
          <a
            href="#"
            style={{ color: isDarkMode ? "White" : "#525252" }}
            onClick={toggleProjects}
          >
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
                  href="https://www.linkedin.com/in/kau%C3%AA-bastos-528860201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin color={isDarkMode ? "White" : "Black"} />
                </a>
                <a
                  href="https://github.com/folluman"
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

      {projects && (
        <Container
          light={isDarkMode}
          onClose={() => {
            setProjects(false);
            setIsContainerVisible(false);
          }}
        >
          <ProjectsContainer style={{ color: isDarkMode ? "White" : "Black" }}>
            <div className="projects_div">
              <div className="">
                <h2>Projetos</h2>
              </div>
              <div className="project__content">
                <img src={ImgColetaCerta} alt="" />
                <div>
                  <h3>Coleta Certa: Aprendendo a Separar o Lixo Brincando!</h3>
                  <p>
                    Desenvolvi a gamificação "Coleta Certa", uma iniciativa
                    voltada para a educação ambiental, com o objetivo de ensinar
                    crianças sobre a correta separação do lixo e a importância
                    da reciclagem.
                  </p>
                  <a
                    href="https://www.construct.net/en/free-online-games/coleta-52502/play"
                    style={{ color: isDarkMode ? "White" : "#525252" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link do jogo
                  </a>
                </div>
              </div>
              <div className="project__content reverse">
                <img src={PrototipoApp} alt="" />
                <div>
                  <h3>
                    Design do aplicativo para reserva de veículos da frota
                  </h3>
                  <p>
                    Durante o meu período na empresa Volkswagen Caminhões e
                    Ônibus, desenvolvi uma ideia de aplicativo voltado para a
                    reserva de veículos da frota, o qual o formulário era feito
                    em papel, em que o objetivo era ajudar os funcionários da
                    empresa a reservar carros ou caronas para se deslocarem do
                    escritório para à fábrica e vice-versa. Desenvolvi o
                    fluxograma de jornadas e o design do aplicativo de acordo
                    com as regras de Marketing da empresa.
                  </p>
                  <a
                    href="https://www.figma.com/design/27BM2HcZOYr7divzeDEwg0/aplicativo-p--gerenciamento-de-frota?node-id=6-2&p=f&t=zGIFtAJxMYC9T7LE-0"
                    style={{ color: isDarkMode ? "White" : "#525252" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link do protótipo
                  </a>
                </div>
              </div>
              <div className="project__content">
                <img src={EdChurrascoImg} alt="" />
                <div>
                  <h3>Site ED Churrasco</h3>
                  <p>
                    Ladding page com o intuito de divulgar os churrascos e
                    eventos feitos pelo churrasqueiro Edilson.
                  </p>
                  <a
                    href="https://edchurrasco.com/"
                    style={{ color: isDarkMode ? "White" : "#525252" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link do site
                  </a>
                </div>
              </div>
              <div className="project__content reverse">
                <img src={ApemegImg} alt="" />
                <div>
                  <h3>Site da APEMEG</h3>
                  <p>
                    Ladding page com o intuito de ajudar a Associação de
                    Pequenos e Microempreendedores de Guarulhos.
                  </p>
                  <a
                    href="https://apemeg.vercel.app/"
                    style={{ color: isDarkMode ? "White" : "#525252" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link do site
                  </a>
                </div>
              </div>
            </div>
          </ProjectsContainer>
        </Container>
      )}
    </Body>
  );
}

export default HomeScreen;
