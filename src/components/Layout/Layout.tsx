import styled from "styled-components";
import theme from '@/style'

interface LayoutProps extends React.InputHTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  fullScreen?: boolean;
  spacing?: number;
}

const Layout = styled.div<LayoutProps>`
  background-color: ${({backgroundColor}) => backgroundColor ?? theme.palette.background.main};
  flex-direction: ${({direction = 'row'}) => direction};
  justify-content: ${({justify = 'center'}) => justify};
  align-items: ${({align = 'center'}) => align};
  height: ${({fullScreen}) => fullScreen ? '100vh' : 'auto'};
  gap: ${({spacing}) => `${spacing ?? theme.spacing.unit}px`};
  display: flex;
`;

export default Layout