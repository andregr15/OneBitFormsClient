import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnswerService } from '../../shared/answer.service';
import { Answer } from '../../shared/answer.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  public answers: Answer[] = [];
  public p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private service: AnswerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.service.getAnswers(params['id']).subscribe(
          res => {
            for(const answer of res) {
              if(answer.questions_answers.length > 0)
                this.answers.push(new Answer(answer));
            }
          }
        );
      }
    )
  }

}
