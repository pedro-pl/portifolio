import styled from "styled-components";

interface IsOpenProps {
    $isOpen: boolean;
}

export const Container = styled.div<IsOpenProps>`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? "0%" : "-200%"};
    transition: 0.3s;
    backdrop-filter: blur(30px);
    z-index: 998;
    box-shadow: 0 3px 6px #00000029, 0 1px 2px #0000003b;
    gap: 2.5rem;

    svg {
        color: #fff;
        margin: 5px;
        color: ${props => props.theme['text']};
        align-self: flex-end;
    }

    @media (min-width: 1020px){
        display: none;
    }
`


export const NavBar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li{
        list-style: none;
        color: ${props => props.theme['text']};
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: 10%;
    }

    div {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;

        svg {
            color: ${props => props.theme['text']}
        }
    }
`