import { Component, OnInit } from '@angular/core';

import { FormService } from '../../shared/form.service';
import { AnswerService } from '../shared/answer.service';
import { MzToastService } from 'ngx-materialize';

import { Form } from '../../shared/form.model';
import { Answer } from '../shared/answer.model';
import { QuestionAnswer } from '../shared/questions_answer.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {

  public form: Form = new Form({});
  public answer: Answer= new Answer({});
  public questions_answer: QuestionAnswer;

  constructor(
    private formService: FormService,
    private answerService: AnswerService,
    private toastService: MzToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.formService.getForm(params['id']).subscribe(
          res => {
            this.form = new Form(res);
            this.answer = new Answer({form_id: this.form.id});
            for(const question of this.form.questions) {
              this.answer.questions_answers.push(new QuestionAnswer({question: question}));
            }
          }
        );
      }
    );
  }

  onSubmit(f) {
    this.answerService.createAnswer(this.answer).subscribe(
      res => {
        this.toastService.show('Answer send with sucess', 10000, 'green');
        this.answer = new Answer({form_id: this.form.id});
        for(const question of this.form.questions) {
          this.answer.questions_answers.push(new QuestionAnswer({question: question}));
        }
      }, error => {
        this.toastService.show('Problem in send answer', 8000, 'red lighten-1');
      }
    );
  }
}
