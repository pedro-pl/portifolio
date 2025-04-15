import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: ${props => props.theme['text-light']};
        font-weight: 800;
    }

    svg {
        color: ${props => props.theme['text-light']};
    }

    @media (max-height: 650px){
        margin-top: 1rem;
    }
`