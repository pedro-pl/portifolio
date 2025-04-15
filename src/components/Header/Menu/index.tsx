import { Container, NavBar } from "./styles";
import { CgClose } from "react-icons/cg";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export function Menu({isOpen, toggleMenu}: MenuProps){
    return (
        <Container $isOpen={isOpen}>
            <CgClose size={30} onClick={() => toggleMenu()}/>

            <NavBar>
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Conhecimentos</li>
                <li>Contatos</li>

                <div>
                    <a href="https://www.linkedin.com/in/pedro-lucas-74745b21a/" target="_blank"><IoLogoLinkedin size={34}/></a>
                    <a href="https://github.com/pedro-pl" target="_blank"><IoLogoGithub size={34}/></a>
                </div>
            </NavBar>
        </Container>
    )
}