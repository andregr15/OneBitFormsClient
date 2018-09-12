import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-submited',
  templateUrl: './answer-submited.component.html',
  styleUrls: ['./answer-submited.component.css']
})
export class AnswerSubmitedComponent implements OnInit {

  private form_id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.form_id = params['id']
    )
  }

  submitAnotherAnswer(): void {
    this.router.navigate([`answers/${this.form_id}/new`]);
  }
}
