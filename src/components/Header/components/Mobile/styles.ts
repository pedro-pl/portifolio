import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: ${props => props.theme['text']};
        font-weight: 800;
    }

    svg {
        color: ${props => props.theme['text']};
    }
`