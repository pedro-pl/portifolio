import { useContext, useRef } from "react";
import Draggable from "react-draggable";

import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { LuMove } from "react-icons/lu";
import { Toggle, ToggleContainer } from "./styles";
import { Context } from "../../contexts/Context";
import { aboutPtBr } from "../../mocks/texts";


export function Toogle(){
    const draggableRef = useRef<HTMLDivElement>(null);
    const { about, isLanguageOn, themeColor, handlePointerDown, handlePointerUp, handleChangeLanguageAbout, handleChangeColorTheme, isThemeOn } = useContext(Context);

    return (
        <Draggable nodeRef={draggableRef as React.RefObject<HTMLElement>} bounds="body">
            <ToggleContainer ref={draggableRef}  $isDark={themeColor === 'dark' ? true : false}>
                <span><LuMove /></span>

                <Toggle $isOn={isLanguageOn} onPointerDown={handlePointerDown} onPointerUp={() => handlePointerUp(handleChangeLanguageAbout)} >
                    <p>{about === aboutPtBr ? "EN" : "PT"}</p>
                </Toggle>

                <Toggle $isOn={isThemeOn} onPointerDown={handlePointerDown} onPointerUp={() => handlePointerUp(handleChangeColorTheme)} >
                    {themeColor === "dark" ? <FiSun size={20} /> : <FaMoon size={20} />}
                </Toggle>
            </ToggleContainer>
        </Draggable>
    )
}