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
`

export const Navbar = styled.nav`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li{
        list-style: none;
        color: ${props => props.theme['text']};
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: 0.2s;

        &:hover {
            border-bottom: 2px solid ${props => props.theme['text']};
            transition: 0.2s;
        }
    }

    @media (min-width: 1500px){
        width: 40%;
    }
`

export const Contacts = styled.nav`
    width: 8%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1500px){
        width: 5%;
    }

    li{
        list-style: none;
        border-bottom: 2px solid transparent;
        transition: 0.2s;

        &:hover {
            border-bottom: 2px solid ${props => props.theme['text']};
            transition: 0.2s;
        }
    }

    svg {
        color: ${props => props.theme['text']};
        font-size: 1.5rem;

        @media (min-width: 1500px){
            font-size: 1.8rem;
        }
    }
`