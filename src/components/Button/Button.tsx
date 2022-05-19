import styled from "styled-components";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'background';
  isActive?: boolean;
}

/**
 * Renders a button with a background color and text color.
 * @param {('primary' | 'secondary' | 'tertiary' | 'background')} color - The color of the button.
 * @param {boolean} isActive - True if the button is active
 */
const Button = styled.button<ButtonProps>` 
  background-color: ${({theme, isActive=false, color = 'tertiary'}) => {
    if (isActive) return theme.palette.secondary.main
    return theme.palette[color].main
  }};
  color: ${({theme, isActive=false, color = 'tertiary'}) => {
    if(isActive) return theme.palette.secondary.contrastText
    return theme.palette[color].contrastText
  }};
  font-size: 1rem;
  font-weight: normal;
  min-height: 35px;
  min-width: 84px;
  text-transform: uppercase;
  letter-spacing: 0.78px;
  margin: 0px;
  border-width: 0px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
  }
`

export default Button