import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100%;
    background: ${props => props.theme['background']};
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto;
    gap: 1rem;

    @media (min-width: 1000px){
        padding: 0 10% 2% 10%;
        width: 80%;
    }

    @media (min-width: 1700px){
        padding: 0 15% 2% 15%;
        width: 70%;
    }
`

interface CardProps {
    $first?: boolean;
}

export const Card = styled.div<CardProps>`
    width: 90%;
    padding: 5%;
    background: ${props => props.theme['background-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.$first && css`
        margin-top: 8vh;
    `}

    h2 {
        color: ${props => props.theme['text']};
        font-weight: 800;
        margin: 0 auto;
    }

    h3 {
        margin: 1rem 0 0 0;
        color: ${props => props.theme['text']};
        display: flex;
        align-items: center;
        gap: 8px;
    }

    img {
        width: 30%;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme['text']};
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 1rem;
    }

    @media (min-width: 1200px){
        padding: 5%;
        padding-top: 2.5rem;

        h2{
            margin: 0 auto;
            margin-bottom:  1.5rem;
        }

        a{
            font-size: 1.2rem;
        }
    }
`

export const ContainerAboutMe = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        width: 100%;
        color: ${props => props.theme['text']};
        font-weight: 600;
        font-size: 0.87rem;
        line-height: 1.2rem;
        white-space: pre-line;
    }

    img {
        display: none;
    }

    @media (min-width: 1200px){
        flex-direction: row-reverse;
        justify-content: center;
        gap: 4rem;

        p {
            width: 40%;
            font-size: 1.2rem;
            line-height: 1.8rem;
        }

        img {
            width: 20%;
            display: block;
            border-radius: 8px;
            box-shadow: 0 3px 6px #00000029, 0 1px 2px #0000003b;
        }
    }
`

export const LineDivisor = styled.div`
    width: 80%;
    height: 2px;
    background: ${props => props.theme['background-card']};
    margin: 1rem 0;
`

export const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    svg {
        background: ${props => props.theme['background-arrow']};
        padding: 3px;
        border-radius: 50%;
    }
`

export const ContainerListProjects = styled.div`
    display: flex;
    width: 70%;
    overflow-x: auto;
`

export const CardProject = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme['sub-background']};
    padding: 10px;
    border-radius: 6px;
    gap: 0.6rem;

    h3 {
        margin: 0;
        color: ${props => props.theme['text']};
    }

    img {
        width: 100%;
        border-radius: 6px;
    }

    p {
        margin: 0;
        line-height: 1.2rem;
        color: ${props => props.theme['text']};
    }
`

export const ContainerSkills = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

export const CardSkill = styled.div`
    padding: 5px 10px;
    background: #40916C;
    color: ${props => props.theme['text']};
    border-radius: 12px;
    align-self: flex-start;
    
    p {
        font-size: 0.75rem;
        white-space: nowrap;
    }
`

export const CardKnowledge = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    background: ${props => props.theme['sub-background']};
    padding: 20px;
    border-radius: 6px;
    margin-top: 1rem;
    gap: 1rem;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${props => props.theme['scroll-track']};
    }

    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme['scroll-thumb']};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    div{
        width: 33%;
        height: 6rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: ${props => props.theme['background-knowledge']};
        border-radius: 6px;

        svg {
            color: ${props => props.theme['text-knowledge']};
        }

        h4 {
            margin: 0.5rem 0 0 0;
            color: ${props => props.theme['background-knowledge']};
            background: ${props => props.theme['text-knowledge']};
            border: 2px solid ${props => props.theme['text-knowledge']};;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 2px 6px;
            border-radius: 6px;
        }
    }

    @media (max-height: 450px) {
        overflow-x: auto; 
        overflow-y: hidden;
        flex-wrap: nowrap;
        align-items: center;

        div {
            width: 20rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: ${props => props.theme['text']};
            border-radius: 6px;
        }

        &::-webkit-scrollbar {
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background: ${props => props.theme['scroll-track']};
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme['scroll-thumb']};
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    @media (min-width: 800px){
        width: 75%;
        height: 40vh;
        justify-content: flex-start;
        gap: 2rem;
        padding: 2.5rem 5%;
        padding-right: 0;

        div {
            width: 7rem;
            height: 7rem;
            font-size: 1rem;
            gap: 1rem;
        }
    }
`