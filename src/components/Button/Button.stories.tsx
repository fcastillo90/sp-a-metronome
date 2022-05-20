import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../style';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'background'],
      control: 'select',
    },
    children: {
      control: 'text',
    },
    isActive: {
      control: 'boolean',
    },
    onClick: { 
      action: 'clicked' 
    },
    ref: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    forwardedAs: {
      table: {
        disable: true,
      },
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
  children: '72 bpm',
  color: 'tertiary',
  isActive: false,
};
