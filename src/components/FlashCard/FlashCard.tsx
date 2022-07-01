import React, { HTMLAttributes } from 'react';
import { StorybookFlashCard } from './flashcard.style';
import { Poppins } from '../../style';

export interface FlashCardProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;

  title: string;

  content: string;

  divider?: boolean;
}

export const FlashCard = ({
  title,
  content,
  divider = false,
  ...props
}: FlashCardProps) => {
  return (
    <Poppins>
      <StorybookFlashCard {...props}>
        <h2>{title}</h2>
        {divider ? <hr /> : null}
        <p>{content}</p>
      </StorybookFlashCard>
    </Poppins>
  );
};
