import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/question.model';
import { AnswerService } from '../../shared/answer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public questions: Question[] = [];

  constructor(
    private service: AnswerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.service.getAnswers(params['id']).subscribe(
          res => {
            for(const question of res){
              this.questions.push(new Question(question));
            }
          }
        );
      }
    );
  }

}
