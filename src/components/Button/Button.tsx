import { PaletteOptions } from "@/types";
import styled from "styled-components";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'background';
  isActive?: boolean;
}

const Button = styled.button<ButtonProps>` 
  background-color: ${({theme, isActive=false, color = 'tertiary'}) => {
    console.log(theme, color)
    if (isActive) return theme.palette.secondary.main
    return theme.palette[color].main
  }};
  color: ${({theme, isActive=false, color = 'tertiary'}) => {
    if(isActive) return theme.palette.secondary.contrastText
    return theme.palette[color].contrastText
  }};
  font-size: 14px;
  font-weight: normal;
  min-height: 35px;
  min-width: 84px;
  text-transform: uppercase;
  letter-spacing: 0.78px;
  margin: 0px;
  border-width: 0px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`

export default Button