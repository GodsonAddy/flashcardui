import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FlashCardUI/Button',
  component: Button,
  argTypes: {
    label: { control: { type: 'text' } },
    hover: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Button',
  hover: '#b71c1c',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  hover: '#002984',
  onClick: action('secondary click'),
  buttonType: 'contained',
  color: 'white',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  hover: 'palevioletred',
  buttonType: 'outlined',
  color: 'papayawhip',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  label: 'Button',
  disabled: true,
  buttonType: 'contained',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  size: 'fullWidth',
  label: 'Button',
  color: 'rebeccapurple',
  buttonType: 'outlined',
};

export const Rounded = Template.bind({});
Rounded.args = {
  size: 'fullWidth',
  label: 'Button',
  color: '#f44336',
  buttonType: 'contained',
  rounded: true,
};
