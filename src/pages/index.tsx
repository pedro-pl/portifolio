import { useState } from 'react';
import { Card, Container, Header, LineDivisor, Toggle, ToggleTheme } from './styles';

import { FiMenu } from 'react-icons/fi';
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

import { aboutEn, aboutPtBr } from '../mocks/texts';

interface themeProps {
    changeTheme: (theme: string) => void
}

export function Home({changeTheme}: themeProps){
    const [theme, setTheme] = useState('dark')
    const [about, setAbout] = useState(aboutPtBr)
    const [isOn, setIsOn] = useState(false);

    function changeColorTheme(){
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }

        changeTheme(theme)
    }
     
    function ChangeLanguageAbout(){
        if(about === aboutPtBr){
            setAbout(aboutEn)
            setIsOn(!isOn)
        }else{
            setAbout(aboutPtBr)
            setIsOn(!isOn)
        }
    }

    return (
        <Container>
            <Header>
                <h3>Pedro Lucas</h3>
                <FiMenu size={22} />
            </Header>

            <Card>
                <h2>{about === aboutPtBr ? 'SOBRE MIM' : 'ABOUT ME'}</h2>

                <p>{about}</p>

                <Toggle isOn={isOn} onClick={() => ChangeLanguageAbout()}>
                    <p>{about === aboutPtBr ? 'En' : 'Pt'}</p>
                </Toggle>
            </Card>

            <LineDivisor />

            <ToggleTheme isDark={theme === 'dark' ? true : false} onClick={() => changeColorTheme()}>
                {
                    theme === 'dark' ? <FiSun size={20}/> : <FaMoon size={20}/>
                }
            </ToggleTheme>
        </Container>
    )
}