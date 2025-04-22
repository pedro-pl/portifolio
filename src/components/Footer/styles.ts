import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        &:last-child {
            width: 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    p {
        color: ${props => props.theme['text']};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme['text']};
    }

    @media (min-width: 1200px){
        font-size: 1rem;
    }
`