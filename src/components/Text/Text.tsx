import styled from "styled-components"

interface TextProps extends React.InputHTMLAttributes<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const StyledText = styled.div<TextProps>`
  font-size: ${({variant = 'p', theme}) => theme.typography[variant].fontSize};
  font-weight: ${({variant = 'p', theme}) => theme.typography[variant].fontWeight};
  line-height: ${({variant = 'p', theme}) => theme.typography[variant].lineHeight};
  letter-spacing: ${({variant = 'p', theme}) => theme.typography[variant].letterSpacing};
`

const Text = ({variant = 'p', size = 1, children, ...rest}: TextProps) => 
    <StyledText {...rest} as={variant}>
        {children}
    </StyledText>

export default Text