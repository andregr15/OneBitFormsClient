import { QuestionAnswer } from './questions_answer.model';

export class Answer {
    id: number;
    form_id: number;
    questions_answers: QuestionAnswer[] = [];

    constructor(answerInfo: any){
        this.id = answerInfo.id;
        this.form_id = answerInfo.form_id;
        
        if(answerInfo.questions_answer != undefined)
            this.includeQuestionsAnswers(answerInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions_answers: any){
        for(const question_answer of questions_answers) {
            this.questions_answers.push(new QuestionAnswer(question_answer));
        }
    }
}