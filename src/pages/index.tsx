import { useState, useRef } from 'react';
import { Card, Container, Header, LineDivisor, ProjectContainer, CardKnowledge, CardProject, ToggleContainer, Toggle, Footer } from './styles';

import { FiMenu } from 'react-icons/fi';
import { FiSun } from "react-icons/fi";
import { FaMoon, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact, IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io5";
import { LuMove } from "react-icons/lu";

import Draggable from "react-draggable";

import TimerPomodoro from '../assets/timer-pomodoro.png';

import { aboutEn, aboutPtBr } from '../mocks/texts';

interface themeProps {
    changeTheme: (theme: string) => void
}

export function Home({changeTheme}: themeProps){
    const [theme, setTheme] = useState('dark')
    const [about, setAbout] = useState(aboutPtBr)
    const [isOn, setIsOn] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const draggableRef = useRef<HTMLDivElement>(null);

    function handleChangeColorTheme(){
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }

        changeTheme(theme)
    }
     
    function handleChangeLanguageAbout(){
        if(about === aboutPtBr){
            setAbout(aboutEn)
            setIsOn(!isOn)
        }else{
            setAbout(aboutPtBr)
            setIsOn(!isOn)
        }
    }

    let pressTimer: ReturnType<typeof setTimeout> | null = null;

    const handlePointerDown = () => {
        pressTimer = setTimeout(() => {
            setIsDragging(true);
        }, 150);
    };
    
    const handlePointerUp = (callback: () => void) => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    
        if (!isDragging) {
            callback();
        }
    
        setIsDragging(false);
    };

    return (
        <Container>
            <Header>
                <h3>Pedro Lucas</h3>
                <FiMenu size={22} />
            </Header>

            <Card>
                <h2>{about === aboutPtBr ? 'SOBRE MIM' : 'ABOUT ME'}</h2>

                <p>{about}</p>
            </Card>

            <LineDivisor />

            <Card>
                <h2>{about === aboutPtBr ? 'PROJETOS' : 'PROJECTS'}</h2>

                <ProjectContainer>
                    <FaArrowLeft />
                    <CardProject>
                        <h3>TIMER POMODORO</h3>
                        <img src={TimerPomodoro} />
                        <p>
                            Cronômetro para gerenciar tarefas através do método pomodor. Projeto criado através do curso sobre React da Rocketseat.
                        </p>
                    </CardProject>
                    <FaArrowRight/>
                </ProjectContainer>
            </Card>

            <LineDivisor />
            
            <Card>
                <h2>{about === aboutPtBr ? 'CONHECIMENTOS' : 'KNOWLEDGE'}</h2>

                <CardKnowledge>
                    <div>
                        <IoLogoJavascript size={65}/>
                        <h3>JavaScript</h3>
                    </div>

                    <div>
                        <IoLogoReact size={65}/>
                        <h3>React</h3>
                    </div>
                </CardKnowledge>
            </Card>

            <LineDivisor />

            <Card>
                <h2>{about === aboutPtBr ? 'CONTATOS' : 'CONTACTS'}</h2>

                <a href='mailto:lucaspires2322@gmail.com'><IoMailOutline size={22}/> lucaspires2322@gmail.com</a>
                <a href='https://api.whatsapp.com/send/?phone=5511947254880' target="_blank"><IoLogoWhatsapp size={22} /> (11) 94725-4880</a>
            </Card>

            <LineDivisor />

            <Footer>
                <div>
                    <p>© 2025 {about === aboutPtBr ? 'Por' : 'By'} Pedro Lucas.</p>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/pedro-lucas-74745b21a/" target="_blank"><IoLogoLinkedin size={24}/></a>
                    <a href="https://github.com/pedro-pl" target="_blank"><IoLogoGithub size={24}/></a>
                </div>
            </Footer>

            <Draggable nodeRef={draggableRef as React.RefObject<HTMLElement>} bounds="body">
                <ToggleContainer ref={draggableRef}>
                    <span><LuMove /></span>

                    <Toggle $isOn={isOn} onPointerDown={handlePointerDown} onPointerUp={() => handlePointerUp(handleChangeLanguageAbout)} >
                        <p>{about === aboutPtBr ? "EN" : "PT"}</p>
                    </Toggle>

                    <Toggle $isOn={theme === 'dark'} onPointerDown={handlePointerDown} onPointerUp={() => handlePointerUp(handleChangeColorTheme)} >
                        {theme === "dark" ? <FiSun size={20} /> : <FaMoon size={20} />}
                    </Toggle>
                </ToggleContainer>
            </Draggable>
        </Container>
    )
}