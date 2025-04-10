import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Container } from "./styles"

interface LanguageProps{
    language: string;
}

export function Footer({language}: LanguageProps){
    return(
        <Container>
            <div>
                <p>© 2025 {language === "pt" ? 'Por' : 'By'} Pedro Lucas.</p>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/pedro-lucas-74745b21a/" target="_blank"><IoLogoLinkedin size={24}/></a>
                <a href="https://github.com/pedro-pl" target="_blank"><IoLogoGithub size={24}/></a>
            </div>
        </Container>
    )
}