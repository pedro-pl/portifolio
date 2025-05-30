import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { Contacts, Container, Navbar } from "./styles";
import { scroller } from 'react-scroll';
import cv from "../../../../assets/Curriculo_Pedro_Lucas.pdf";

export function DesktopHeader(){
    const scrollToSection = (sectionName: string) => {
        scroller.scrollTo(sectionName, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: sectionName === 'projetos' ? -50 : -80
        });
    };

    return(
        <Container>
            <h3>Pedro Lucas</h3>
            
            <Navbar>
                <li onClick={() => scrollToSection('sobre')}>Sobre mim</li>
                <li onClick={() => scrollToSection('projetos')}>Projetos</li>
                <li onClick={() => scrollToSection('conhecimentos')}>Conhecimentos</li>
                <li onClick={() => scrollToSection('contatos')}>Contatos</li>
                <li><a href={cv} download>Download CV <HiDownload/></a></li>
            </Navbar>

            <Contacts>
                <li>
                    <a href="https://github.com/pedro-pl" target="_blank"><IoLogoGithub /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/pedro-lucas-74745b21a/" target="_blank"><IoLogoLinkedin /></a>
                </li>
            </Contacts>
        </Container>
    )
}