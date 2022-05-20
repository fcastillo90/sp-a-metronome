import styled from "styled-components";
import theme from '@/style'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  backgroundColor?: string;
  direction?: 'row' | 'column';
  fullScreen?: boolean;
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  spacing?: number;
  width?: string;
  height?: string;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

/**
 * Renders a layout container.
 * @param {('start' | 'end' | 'center' | 'stretch' | 'baseline')} align - The alignment of the layout.
 * @param {string} backgroundColor - The background color of the layout.
 * @param {('row' | 'column')} direction - The direction of the layout.
 * @param {boolean} fullScreen - True if the layout should fill the screen.
 * @param {('start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly')} justify - The justify of the layout.
 * @param {number} spacing - The spacing of the layout.
 * @param {string} width - The width of the layout.
 * @param {string} height - The height of the layout.
 * @param {('wrap' | 'nowrap' | 'wrap-reverse')} wrap - The wrap of the layout.
 */
const Layout = styled.div<LayoutProps>`
  ${({backgroundColor}) => backgroundColor && `background-color: ${backgroundColor}`};
  align-items: ${({align = 'center'}) => align};
  display: flex;
  flex-direction: ${({direction = 'row'}) => direction};
  flex-wrap: ${({wrap = 'nowrap'}) => wrap};
  gap: ${({spacing}) => `${spacing ?? theme.spacing.unit}px`};
  min-height: ${({fullScreen}) => fullScreen ? '100vh' : 'auto'};
  justify-content: ${({justify = 'center'}) => justify};
  width: ${({width = 'auto'}) => width};
  height: ${({height = 'auto'}) => height};
`;

export default Layout