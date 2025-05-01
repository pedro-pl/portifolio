import styled from "styled-components";

interface ThemeProps {
    color: string;
}

export const CarouselWrapper = styled.div<ThemeProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    position: relative;

    svg {
        background: ${props => props.theme['background-arrow']};
        padding: 3px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid ${props => props.theme[props.color === 'dark' ? 'background-arrow' : 'text']};
    }

    @media (min-width: 600px){
        justify-content: center;
        gap: 2rem;

        svg {
            padding: 10px;
        }
    }
`;

export const CarouselViewport = styled.div`
    width: 80%;
    overflow: hidden;

    @media (min-width: 750px) {
        width: 100%;
    }
`;



interface CarrouselProps {
    $current: number;
}

export const CarouselTrack = styled.div<CarrouselProps>`
    display: flex;
    transition: transform 0.4s ease;
    transform: ${(props) => `translateX(-${props.$current * 100}%)`};
`;

export const ProjectCard = styled.div`
    min-width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme['sub-background']};
    padding: 10px;
    border-radius: 6px;
    gap: 0.6rem;

    img {
        width: 100%;
        border-radius: 6px;
    }

    h3 {
        margin: 0;
        color: ${props => props.theme['text-project']};
    }

    p {
        width: 100%;
        margin: 0;
        line-height: 1.2rem;
        color: ${props => props.theme['text-project']};
        font-weight: 500;
    }

    @media (min-width: 1200px){
        p{
            font-size: 1.2rem;
            line-height: 1.8rem;
        }
    }
`;

export const SkillsList = styled.div`
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.5rem;
    padding-bottom: 6px;
`;

export const CardSkill = styled.div`
    padding: 5px 10px;
    background: ${props => props.theme['skill-background']};
    border-radius: 16px;
    align-self: flex-start;
    
    p {
        font-size: 0.75rem;
        white-space: nowrap;
        color: ${props => props.theme['text-skill']};
        font-weight: 600;
    }

    @media (min-width:1200px){
        p{
            font-size: 1rem;
        }
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 10%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (min-width: 900px){
        justify-content: flex-end;
    }
`

export const ButtonNavigation = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    border: none;
    border-radius: 50%;
    background: ${props => props.theme['skill-background']};

    &:hover{
        background-color: ${props => props.theme['hover-link']};
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    svg {
        font-size: 26px;
        background: transparent;
        border: none;
        color: ${props => props.theme['text-skill']};
    }

    @media (min-width: 900px){
        width: 4rem;
        height: 4rem;

        svg {
            font-size: 34px;
        }
    }
`
