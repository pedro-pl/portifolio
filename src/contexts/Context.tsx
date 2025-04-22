import { createContext, ReactNode, useEffect } from "react";


import { useState } from 'react';
import { aboutEn, aboutPtBr } from "../mocks/texts";
import { darkTheme, lightTheme } from "../styles/themes/default";

interface ThemeType {
    background: string;
    'background-arrow': string;
    'background-card': string;
    'sub-background': string;
    'skill-background': string;
    'text-skill': string;
    'text-project': string;
    text: string;
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
    isLanguageOn: boolean,
    isThemeOn: boolean,
    themeColor: string,
}

export const Context = createContext({} as ContextType);

export interface ContextProviderProps {
    children: ReactNode;
}

export function ContextProvider({children}: ContextProviderProps){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(prefersDark ? darkTheme : lightTheme)
    const [themeColor, setThemeColor] = useState(prefersDark ? 'dark' : 'light')
    const [about, setAbout] = useState(aboutPtBr)
    const [isLanguageOn, setIsLanguageOn] = useState(false);
    const [isThemeOn, setIsThemeOn] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    
    function changeTheme(themeColor: string){
        if(themeColor === 'dark'){
            setTheme(lightTheme)
        }else{
            setTheme(darkTheme)
        }
    }
    
    function handleChangeColorTheme(){
        changeTheme(themeColor);

        if(themeColor === 'dark'){
            setThemeColor('light')
        }else{
            setThemeColor('dark')
        }

        setIsThemeOn(!isThemeOn);
    }
        
    function handleChangeLanguageAbout(){
        if(about === aboutPtBr){
            setAbout(aboutEn)
            setIsLanguageOn(!isLanguageOn)
        }else{
            setAbout(aboutPtBr)
            setIsLanguageOn(!isLanguageOn)
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
            isLanguageOn,
            isThemeOn,
            themeColor
        }}>
            {children}
        </Context.Provider>
    )
}