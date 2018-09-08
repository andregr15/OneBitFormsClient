import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../shared/form.service';
import { MzToastService } from 'ngx-materialize';
import { Form } from '../../../shared/form.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  @Input() form: Form;

  constructor(private service: FormService, private toastService: MzToastService) { }

  ngOnInit() {
  }

  toggleEnable() {
    this.service.updateForm(this.form.id, this.form).subscribe(
      res => {
        this.toastService.show(`Form ${this.form.enable ? 'enable' : 'disable'}`, 8000, 'green');
      },
      error => {
        this.toastService.show(`Error in ${this.form.enable ? 'enable' : 'disable'} Form`, 8000, 'red');
      }
    )
  }

}
