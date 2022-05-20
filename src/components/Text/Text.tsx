import styled from "styled-components"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: 'primary' | 'secondary' | 'tertiary' | 'background' | 'white';
  disableMargin?: boolean;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | '900';
}

/**
 * Renders a text element.
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span')} variant - The variant of the text element.
 * @param {('primary' | 'secondary' | 'tertiary' | 'background')} color - The color of the text element.
 * @param {boolean} disableMargin - True if the text element should not have a margin.
 * @param {('light' | 'regular' | 'medium' | 'bold' | '900')} weight - The weight of the text element.
 */
const StyledText = styled.div<TextProps>`
  font-size: ${({variant = 'p', theme}) => theme.typography[variant].fontSize};
  font-weight: ${({weight, variant = 'p', theme}) => weight ?? theme.typography[variant].fontWeight};
  line-height: ${({variant = 'p', theme}) => theme.typography[variant].lineHeight};
  letter-spacing: ${({variant = 'p', theme}) => theme.typography[variant].letterSpacing};
  color: ${({color = 'primary', theme}) => theme.palette[color].main};
  text-transform: ${({variant = 'p', theme}) => theme.typography[variant].textTransform};
  margin: ${({disableMargin = false, theme}) => disableMargin ? 0 : theme.spacing.unit}px 0;
`

const Text = ({variant = 'p', children, ...rest}: TextProps) => 
  <StyledText {...rest} as={variant} variant={variant}>
      {children}
  </StyledText>

export default Text