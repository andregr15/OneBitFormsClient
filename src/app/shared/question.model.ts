import { QuestionAnswer } from '../answers/shared/questions_answer.model';

export class Question {
    id: number;
    title: string;
    kind: string;
    form_id: number;
    questions_answers: QuestionAnswer[] = [];
    required: boolean;
    order: number;

    constructor(questionInfo: any){
        this.id = questionInfo.id;
        this.title = questionInfo.title;
        this.kind = questionInfo.kind;
        this.form_id = questionInfo.form_id;
        this.required = questionInfo.required;
        this.order = questionInfo.order;
        
        this.includeQuestionsAnswers(questionInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions_answers: any){
        for(const question_answer in questions_answers)
            this.questions_answers.push(new QuestionAnswer(questions_answers[question_answer]));
    }

    static getMaxOrder(questions: Question[]): number {
        let maxOrder: number = 0;
        for(const q of questions) {
            if(q.order > maxOrder){
                maxOrder = q.order;
            }
        }
        return maxOrder + 1;
    }
}

