import { Component, OnInit, Input } from '@angular/core';
import { QuestionAnswer } from '../../shared/questions_answer.model';

@Component({
  selector: 'app-graph-number',
  templateUrl: './graph-number.component.html',
  styleUrls: ['./graph-number.component.css']
})
export class GraphNumberComponent implements OnInit {

  @Input() questions_answers: QuestionAnswer[];
  public chartLabels: string[];
  public chartData: number[];
  public chartType = 'pie';

  constructor() { }

  ngOnInit() {
    const answers = {};

    for(const qa of this.questions_answers) {
      if(qa != null) {
        if(answers.hasOwnProperty(qa.value) !== true){
          answers[qa.value] = 1;
        } else {
          answers[qa.value] += 1;
        }
      }
    }

    const answers_labels = [];
    const answers_value = [];

    for(const key in answers){
      if(answers.hasOwnProperty(key)) {
        answers_labels.push(key);
        answers_value.push(answers[key]);
      }
    }

    this.chartLabels = answers_labels;
    this.chartData = answers_value;
  }

}
