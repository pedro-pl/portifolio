import { createContext, ReactNode } from "react";


import { useState } from 'react';
import { aboutEn, aboutPtBr } from "../mocks/texts";
import { darkTheme, lightTheme } from "../styles/themes/default";

interface ThemeType {
    background: string;
    'background-arrow': string;
    'background-card': string;
    'sub-background': string;
    'skill-background': string;
    text: string;
    'text-light': string;
    toggle: string;
  }

interface ContextType {
    changeTheme: (themeColor: string) => void,
    handleChangeColorTheme: () => void,
    handleChangeLanguageAbout: () => void,
    handlePointerDown: () => void,
    handlePointerUp: (callback: () => void) => void,
    theme: ThemeType,
    about: string,
    isOn: boolean,
    themeColor: string,
}

export const Context = createContext({} as ContextType);

export interface ContextProviderProps {
    children: ReactNode;
}

export function ContextProvider({children}: ContextProviderProps){
    const [theme, setTheme] = useState(darkTheme)
    const [themeColor, setThemeColor] = useState('dark')
    const [about, setAbout] = useState(aboutPtBr)
    const [isOn, setIsOn] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    
    function changeTheme(themeColor: string){
        if(themeColor === 'dark'){
            setTheme(lightTheme)
        }else{
            setTheme(darkTheme)
        }
    }
    
    function handleChangeColorTheme(){
        if(themeColor === 'dark'){
            setThemeColor('light')
        }else{
            setThemeColor('dark')
        }

        changeTheme(themeColor)
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

    function handlePointerDown(){
        pressTimer = setTimeout(() => {
            setIsDragging(true);
        }, 150);
    };
    
    function handlePointerUp(callback: () => void){
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    
        if (!isDragging) {
            callback();
        }
    
        setIsDragging(false);
    };

    return(
        <Context.Provider value={{
            changeTheme,
            handleChangeColorTheme,
            handleChangeLanguageAbout,
            handlePointerDown,
            handlePointerUp,
            theme,
            about,
            isOn,
            themeColor
        }}>
            {children}
        </Context.Provider>
    )
}