import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RippleLoader from './RippleLoader';
import { ThemeProvider } from 'styled-components';
import theme from '../../style';
import { Layout } from '../Layout';

export default {
  title: 'Example/RippleLoader',
  component: RippleLoader,
  argTypes: {}
} as ComponentMeta<typeof RippleLoader>;

const Template: ComponentStory<typeof RippleLoader> = (args) => <ThemeProvider theme={theme}><Layout backgroundColor="black"><RippleLoader {...args} /></Layout></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {};
