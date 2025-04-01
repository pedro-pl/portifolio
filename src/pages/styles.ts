import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100vh;
    background: ${props => props.theme['background']};
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`

export const ToggleTheme = styled.div<{ isDark: Boolean }>`
    width: 68px;
    height: 36px;
    background: ${props => props.theme['text']};
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: end;
    position: fixed;
    bottom: 2rem;
    left: 5%;

    &:before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background: ${props => props.theme['background']};
        border-radius: 50%;
        top: 50%;
        left: ${({ isDark }) => (!isDark ? '35px' : '5px')};
        transform: translateY(-50%);
        transition: left 0.3s ease;
    }

    svg {
        font-weight: 600;
        color: ${props => props.theme['background-card']};
        margin-left: ${({ isDark }) => (isDark ? '40px' : '10px')};
    }
`

export const Header = styled.header`
    width: 100%;
    height: 8vh;
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

export const Card = styled.div`
    width: 90%;
    padding: 5%;
    background: ${props => props.theme['background-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin: 0;
        color: ${props => props.theme['text']};
        font-weight: 800;
        margin: 0 auto;
    }

    p {
        width: 100%;
        color: ${props => props.theme['text']};
        font-weight: 600;
        font-size: 0.87rem;
    }

    img {
        width: 30%;
    }
`

export const Toggle = styled.div<{ isOn: boolean }>`
  width: 20%;
  height: 30px;
  background: ${props => props.theme['text']};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: end;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => props.theme['background']};
    border-radius: 50%;
    top: 50%;
    left: ${({ isOn }) => (isOn ? '35px' : '5px')};
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }

  p{
    font-weight: 600;
    color: ${props => props.theme['background-card']};
    margin-left: ${({ isOn }) => (!isOn ? '35px' : '10px')};
  }
`;

export const LineDivisor = styled.div`
    width: 80%;
    height: 2px;
    background: ${props => props.theme['background-card']};
    margin: 1rem 0;
`