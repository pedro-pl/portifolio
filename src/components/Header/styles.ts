import styled from "styled-components";

interface ContainerProps {
    $scrolled: boolean
}

export const Container = styled.header<ContainerProps>`
    width: 90%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 0 5%;
    z-index: 997;
    backdrop-filter: blur(30px);
    background: ${props => props.$scrolled ? 'rgba(15, 15, 15, 0.4)' : props.theme['background']};

    @media (max-height: 650px){
        height: 15vh;
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