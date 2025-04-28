import styled from "styled-components";

interface ContainerProps {
    $scrolled: boolean;
}

export const Container = styled.header<ContainerProps>`
    width: 90%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 0 5%;
    z-index: 999;
    background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.4)' : 'transparent'};
    box-shadow: ${props => props.$scrolled ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'};
    backdrop-filter: ${props => props.$scrolled ? "blur(20px)" : "none"};

    @media (max-height: 650px){
        margin-top: 1rem;
    }

    @media (min-width: 1000px){
        padding: 0 10%;
        width: 80%;
    }

    @media (min-width: 1700px){
        padding: 0 15%;
        width: 70%;
    }
`