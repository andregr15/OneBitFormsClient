import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnDestroy {

  @Input() questions: Question[];
  @Input() form_id: number;
  
  public question_new: Question;
  private questions_order = [];

  subs = new Subscription();

  constructor(private dragulaService: DragulaService, private service: QuestionService) { 
    dragulaService.createGroup("QUESTIONS", {
      removeOnSpill: false,
      revertOnSpill: true
    });
  }

  ngOnInit() {
    this.question_new = new Question({order: Question.getMaxOrder(this.questions)});

    this.subs.add(this.dragulaService.drop()
      .subscribe(res => {
        this.questions_order = [];
        let i = 1;
        for(const q of this.questions) {
          q.order = i;
          i += 1;
          
          this.questions_order.push({
              question_id: q.id, question_order: q.order
            });
        }

        this.updateQuetionsOrder();
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.dragulaService.destroy('QUESTIONS');
  }

  updateQuetionsOrder(): void {
    this.service.reorderQeustions(this.form_id, this.questions_order).subscribe(
      res => {
        //console.log(res);
      }, error => {
        console.log(error);
      }
    )
  }
}
