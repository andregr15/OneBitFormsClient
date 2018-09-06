import { Question } from '../../shared/question.model';

export class QuestionAnswer {
    id: number;
    value: string;
    answer_id: number;
    question: Question;

    constructor(questionAnswerInfo: any) {
        this.id = questionAnswerInfo.id;
        this.value = questionAnswerInfo.value;
        this.answer_id = questionAnswerInfo.answer_id;
        this.question = questionAnswerInfo.question;
    }
}