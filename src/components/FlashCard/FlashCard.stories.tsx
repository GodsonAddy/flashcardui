import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FlashCard, FlashCardProps } from './FlashCard';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FlashCardUI/FlashCard',
  component: FlashCard,
  argTypes: {
    title: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<FlashCardProps> = args => <FlashCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Lorem ipsum',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  divider: true,
  onClick: action('default click'),
};
