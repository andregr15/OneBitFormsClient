import { Component, OnInit } from '@angular/core';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public form: Form = new Form({
    primary_color: '#eee',
    enable: false
  });

  constructor(
    private service: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if(params['id'] != undefined) {
          this.service.getForm(params['id']).subscribe(
            res => {
              this.form = new Form(res);
            }
          )
        }
      }
    )
  }

}
