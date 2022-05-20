import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import theme from '../../style';

export default {
  title: 'Example/Layout',
  component: Layout,
  argTypes: {
    align: {
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      control: 'select',
    },
    backgroundColor: {
      control: 'color',
    },
    direction: { 
      options: ['row', 'column'],
      control: 'select',
    },
    fullScreen: {
      control: 'boolean',
    },
    justify: {
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: 'select',
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: 'select',
    },
    spacing: {
      control: 'number',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
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
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <ThemeProvider theme={theme}>
  <Layout {...args}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Layout>
</ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
  align: 'center',
  backgroundColor: '#eee',
  direction: 'column',
  fullScreen: true,
  justify: 'center',
  wrap: 'nowrap',
  spacing: 0,
  width: 'auto',
  height: 'auto',
};
