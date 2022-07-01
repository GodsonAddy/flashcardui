import React, { HTMLAttributes } from 'react';
import {
  StorybookQuestionnaire,
  StorybookCapital,
} from './questionnaire.style';
import { Poppins } from '../../style';

export interface QuestionnaireProps extends HTMLAttributes<HTMLElement> {
  content: string;
}

export const Questionnaire = ({ content, ...props }: QuestionnaireProps) => {
  return (
    <Poppins>
      <StorybookQuestionnaire {...props}>
        <StorybookCapital>{content}</StorybookCapital>
      </StorybookQuestionnaire>
    </Poppins>
  );
};
