import { getSeconds } from "@/utils/bpmCalculator";
import styled from "styled-components";

interface RoundedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'background';
  bpm?: number;
}

/**
 * Renders a rounded button with ripple effect on bpm
 * @param {('primary' | 'secondary')} color - The color of the button.
 * @param {number} bpm - The bpm of the button.
 */
const RoundedButton = styled.button<RoundedButtonProps>` 
  background-color: ${({theme, color = 'primary'}) => {
    return theme.palette[color].main
  }};
  color: ${({theme, color = 'primary'}) => {
    return theme.palette[color].contrastText
  }};
  border-radius: 50%;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 1.33px;
  border-width: 0px;
  height: 132px;
  width: 132px;
  margin: 0px;
  position: relative;
  z-index: 1;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    z-index: -1;
    animation-name: ripple;
    animation-duration: ${({bpm = 0}) => getSeconds(bpm)}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`

export default RoundedButton