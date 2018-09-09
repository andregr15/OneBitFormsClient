import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];
  @Input() form_id: number;

  constructor(
    private service: QuestionService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {    
  }

  onSubmit(f) {
    if(this.question.id){
      this.service.updateQuestion(this.question.id, this.question).subscribe(
        res => {
          this.toastService.show("Question updated", 8000, 'green');
        }, error => {
          this.toastService.show('Problem in Question update', 8000, 'red lighten-1');
        }
      );
    } else {
      this.service.createQuestion(this.form_id, this.question).subscribe(
        res => {
          this.questions.push(new Question(res));
          this.question = new Question({});
        }, error => {
          this.toastService.show('Problem in Question creation', 8000, 'red lighten-1');
        }
      );
    }
  }

  deleteQuestion(): boolean {
    if(confirm('You want delete this question?')) {
      this.service.destroyQuestion(this.question.id).subscribe(
        res => {
          const index = this.questions.indexOf(this.question);
          this.questions.splice(index, 1);
          this.toastService.show('Question deleted', 8000, 'green');
        }, error => {
          this.toastService.show(`Error in delete question ${this.question.title}`, 8000, 'red lighten-1');
        }
      );
    }
    return false;
  }

}
