import { Container, NavBar } from "./styles";
import { CgClose } from "react-icons/cg";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { scroller } from "react-scroll";
import cv from "../../../../../assets/Curriculo_Pedro_Lucas.pdf";

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    menuRef: React.RefObject<HTMLDivElement | null>;
}

export function MobileMenu({isOpen, toggleMenu, menuRef}: MenuProps){
    const scrollToSection = (sectionName: string) => {
            scroller.scrollTo(sectionName, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              offset: -80
            });
            toggleMenu()
        };
    return (
        <Container $isOpen={isOpen}  ref={menuRef}>
            <CgClose size={30} onClick={() => toggleMenu()}/>

            <NavBar>
                <li onClick={() => scrollToSection('sobre')}>Sobre mim</li>
                <li onClick={() => scrollToSection('projetos')}>Projetos</li>
                <li onClick={() => scrollToSection('conhecimentos')}>Conhecimentos</li>
                <li onClick={() => scrollToSection('contatos')}>Contatos</li>
                <li><a href={cv} download>Download CV <HiDownload size={28}/></a></li>

                <div>
                    <a href="https://www.linkedin.com/in/pedro-lucas-74745b21a/" target="_blank"><IoLogoLinkedin size={34}/></a>
                    <a href="https://github.com/pedro-pl" target="_blank"><IoLogoGithub size={34}/></a>
                </div>
            </NavBar>
        </Container>
    )
}