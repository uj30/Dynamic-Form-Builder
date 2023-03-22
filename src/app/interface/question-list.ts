import { CheckboxAnswer } from './checkbox-answers';

export interface QuestionList {
  question: string;
  answerType: string;
  answerList: CheckboxAnswer[];
}
