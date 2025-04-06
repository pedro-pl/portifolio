import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100%;
    background: ${props => props.theme['background']};
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`

interface SpanProps {
    $isDark: boolean;
}

export const ToggleContainer = styled.div<SpanProps>`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    bottom: 1rem;
    left: 3%;
    align-self: end;
    backdrop-filter: blur(10px);
    padding: 10px;
    border: 1.5px solid ${props => props.theme['sub-background']};
    border-radius:25px;
    cursor: grab;

    span {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: ${props => props.theme['text']};
        top: -9px;
        right: -9px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1.5px solid ${props => props.theme['sub-background']};        

        svg {
            color: ${(props) => (props.theme[props.$isDark ? 'sub-background' : 'text-light'])};
        }
    }
`

interface ToggleProps {
    $isOn: boolean;
}

export const Toggle = styled.button<ToggleProps>`
    width: 68px;
    height: 36px;
    background: ${props => props.theme['text']};
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.theme['toggle']};

    &:before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background: ${props => props.theme['background']};
        border-radius: 50%;
        top: 28%;
        left: ${({ $isOn }) => ($isOn ? '48px' : '16px')};
        transform: translateY(-50%);
        transition: left 0.3s ease;
    }

    svg {
        font-weight: 600;
        color: ${props => props.theme['background-card']};
        margin-left: ${({ $isOn }) => ($isOn ? '32px' : '0px')};
    }

    p{
        font-weight: 600;
        color: ${props => props.theme['background-card']};
        margin-left: ${({ $isOn }) => (!$isOn ? '30px' : '5px')};
    }

    &:last-child{
        &:before{
            top: 72%;
            left: ${({ $isOn }) => (!$isOn ? '48px' : '16px')};
        }
    }
`

export const Header = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h3 {
        color: ${props => props.theme['text']};
        font-weight: 800;
    }

    svg {
        color: ${props => props.theme['text']};
    }
`

export const Card = styled.div`
    width: 90%;
    padding: 5%;
    background: ${props => props.theme['background-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 0;
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

    p {
        width: 100%;
        color: ${props => props.theme['text']};
        font-weight: 600;
        font-size: 0.87rem;
        line-height: 1.2rem;
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

export const CardProject = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme['sub-background']};
    padding: 10px;
    border-radius: 6px;
    gap: 0.6rem;

    h3 {
        margin: 0;
        color: ${props => props.theme['text-light']};
    }

    img {
        width: 100%;
        border-radius: 6px;
    }

    p {
        margin: 0;
        line-height: 1.2rem;
        color: ${props => props.theme['text-light']};
    }
`

export const ContainerSkills = styled.div`
overflow-y: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

export const CardSkill = styled.div`
    padding: 5px 10px;
    background: #40916C;
    color: ${props => props.theme['text-light']};
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
    overflow-x: auto;
    background: ${props => props.theme['sub-background']};
    padding: 20px;
    border-radius: 6px;
    margin-top: 1rem;
    gap: 1rem;

    div{
        width: 35%;
        height: 6rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: ${props => props.theme['text-light']};
        border-radius: 6px;

        div {
            width: 40%;
            height: 2px;
            background: ${(props) => props.theme['sub-background']};
            padding: 0;
            margin: 0.5rem 0 0 0;
        }

        svg {
            color: ${props => props.theme['sub-background']};
        }

        h3 {
            margin: 0.5rem 0 0 0;
            color: ${props => props.theme['text-light']};
            background: ${props => props.theme['sub-background']};
            border: 2px solid #333;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 2px 6px;
            border-radius: 6px;
        }
    }
`

export const Footer = styled.footer`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        &:last-child {
            width: 18%;
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
`