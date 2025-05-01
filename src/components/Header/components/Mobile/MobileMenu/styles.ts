import styled from "styled-components";

interface IsOpenProps {
    $isOpen: boolean;
}

export const Container = styled.div<IsOpenProps>`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100vh;
    top: 0;
    right: ${props => props.$isOpen ? "0%" : "-200%"};
    transition: 0.3s;
    background: ${props => props.theme['background']};
    box-shadow: 60px 20px 100px rgb(0, 0, 0), 20px -20px 100px rgb(0, 0, 0);
    z-index: 999;
    gap: 2.5rem;
    position: fixed;

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