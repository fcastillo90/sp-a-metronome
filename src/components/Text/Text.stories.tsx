import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';
import { ThemeProvider } from 'styled-components';
import theme from '../../style';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      control: 'select',
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'background', 'white'],
      control: 'select',
    },
    disableMargin: {
      control: 'boolean',
    },
    weight: {
      options: ['light', 'regular', 'medium', 'bold', '900'],
      control: 'select',
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
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <ThemeProvider theme={theme}><Text {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  color: 'primary',
  variant: 'h2',
  disableMargin: false,
  weight: 'light',
};
