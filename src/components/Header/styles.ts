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
    background: rgba(15, 15, 15, 0.4);

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