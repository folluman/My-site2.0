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

import { Moon, Sun } from "../../../shared/IconsLight/IconsLight";

import { useState } from "react";

function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkTxt = '#282828'
  const lightTxt = '#8C8C8C'

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Body style={{ backgroundColor: isDarkMode ? "#747474" : "#F2F2F2" }}>
        <HeaderDiv>
          <IconLigh>
            <div
              onClick={() => {
                console.log("clicado");
                toggleTheme();
              }}
            >
              {isDarkMode ? <Sun /> : <Moon />}
              <p style={{ color: isDarkMode ? 'White' : 'Black' }}>Light</p>
            </div>
          </IconLigh>
          <TextJob>
            <h1 style={{ color: isDarkMode ? 'White' : darkTxt }}>
              Desenvolvedor <br /> <span style={{ color: isDarkMode ? darkTxt : lightTxt }}>Web</span>
            </h1>
          </TextJob>
        </HeaderDiv>
              
        <CentralDiv>
          <SemiCircle color={isDarkMode ? 'White' : 'Black' } />
          <SemiCircle2 color={isDarkMode ? 'White' : 'Black' } />
          <ImgDiv>
            <div> </div>
            <h1 style={{ color: isDarkMode ? darkTxt : lightTxt }}>
              Kaue <br />
              <span style={{ color: isDarkMode ? 'White' : darkTxt }}>Bastos</span>
            </h1>
          </ImgDiv>
        </CentralDiv>

        <Links>
          <a href="" style={{color: isDarkMode ? 'White' : '#525252'}}>Sobre</a>
          <a href="" style={{color: isDarkMode ? 'White' : '#525252'}}>Skills</a>
          <a href="" style={{color: isDarkMode ? 'White' : '#525252'}}>Projetos</a>
        </Links>
      </Body>
    </>
  );
}

export default HomeScreen;
