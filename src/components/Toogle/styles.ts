import styled from "styled-components";

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
    backdrop-filter: blur(6px);
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