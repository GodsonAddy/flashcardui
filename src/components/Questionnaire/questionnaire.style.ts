import styled from 'styled-components';
import { QuestionnaireProps } from './Questionnaire';

export const StorybookQuestionnaire: any = styled.div<QuestionnaireProps>`
  font-weight: 400;
  background-color: white;
  border: 1px solid #bacdd8;
  padding: 8px 30px 25px 30px;
  border-radius: 12px;
`;

export const StorybookCapital: any = styled.div<QuestionnaireProps>`
  text-indent: 1.5em;
  &:first-letter {
    text-transform: capitalize;
    font-size: 2em;
    font-weight: bold;
  }
`;
