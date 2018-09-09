import { Component, OnInit, Input } from '@angular/core';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';
import { MzToastService } from 'ngx-materialize';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-form',
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.css']
})
export class FormFormComponent implements OnInit {

  @Input() form: Form;

  constructor(
    private service: FormService,
    private toastService: MzToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if(this.form.id) {
      this.service.updateForm(this.form.id, f).subscribe(
        res => {
          this.toastService.show('Form updated', 8000, 'green');
        }, error => {
          this.toastService.show('Problem in form update', 8000, 'red lighten-1');
        }
      );
    } else {
      this.service.createForm(f).subscribe(
        res => {
          this.router.navigate([`/forms/${res.slug}`]);
        }, error => {
          this.toastService.show('Problem in Form creation', 8000, 'red lighten-1');
        }
      );
    }
  }

}
