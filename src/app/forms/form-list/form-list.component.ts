import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { MzToastService } from 'ngx-materialize';

import { Form } from '../../shared/form.model';
import { Question } from '../../shared/question.model';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  private forms: Form[] = [];

  constructor(private service: FormService, private toastService: MzToastService) { }

  ngOnInit() {
    this.service.getForms().subscribe(
      res => {
          for(const form of res)
          this.forms.push(new Form(form));
        }
      );
  }

  deleteForm(form): boolean {
    if(confirm('You want to delete this form?')) {
      this.service.destroyForm(form.id).subscribe(
        res => {
          const index = this.forms.indexOf(form);
          this.forms.splice(index, 1);
          this.toastService.show('Form deleted', 8000, 'green');
        },
        error => {
          this.toastService.show(`Error in delete the Form ${form.title}`, 8000, 'red lighten-1')
        }
      );
    }
    return false
  }

}
