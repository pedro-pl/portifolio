import styled from "styled-components";

interface IsOpenProps {
    $isOpen: boolean;
}

export const Container = styled.div<IsOpenProps>`
    display: flex;
    flex-direction: column;
    width: 93vw;
    height: 50vh;
    position: fixed;
    top: 2%;
    right: ${props => props.$isOpen ? "50%" : "-200%"};
    transform: translateX(50%);
    transition: 0.2s;
    background: ${props => props.theme['background-card']};
    z-index: 998;
    box-shadow: 0 3px 6px #00000029, 0 1px 2px #0000003b;
    border-radius: 8px;
    gap: 2rem;

    svg {
        color: #fff;
        align-self: flex-end;
        margin: 5px;
        color: ${props => props.theme['text']}
    }
`


export const NavBar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    li{
        list-style: none;
        color: ${props => props.theme['text']};
        font-size: 1.2rem;
        font-weight: 600;
    }

    div {
        margin-top: 1rem;

        svg {
            color: ${props => props.theme['text']}
        }
    }
`