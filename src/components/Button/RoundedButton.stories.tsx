import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundedButton from './RoundedButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../style';

export default {
  title: 'Example/RoundedButton',
  component: RoundedButton,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'background'],
      control: 'select',
    },
    bpm: {
      control: 'number',
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
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => <ThemeProvider theme={theme}><RoundedButton {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
  children: '72',
  color: 'primary',
  isActive: false,
  bpm: 72,
};
