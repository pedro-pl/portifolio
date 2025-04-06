import styled from "styled-components";

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 800px;
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
    }
`;

export const CarouselViewport = styled.div`
    width: 80%;
    max-width: 600px;
    overflow: hidden;
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
        max-height: 250px;
        border-radius: 6px;
    }

    h3 {
        margin: 0;
        color: ${props => props.theme['text-light']};
    }

    p {
        margin: 0;
        line-height: 1.2rem;
        color: ${props => props.theme['text-light']};
    }
`;

export const SkillsList = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin: 0.5rem 0;
`;

export const CardSkill = styled.div`
    padding: 5px 10px;
    background: ${props => props.theme['skill-background']};
    color: ${props => props.theme['text-light']};
    border-radius: 16px;
    align-self: flex-start;
    
    p {
        font-size: 0.75rem;
        white-space: nowrap;
    }
`
