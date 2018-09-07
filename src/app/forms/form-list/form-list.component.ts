import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor(private service: FormService) { }

  ngOnInit() {
    this.service.getForms().subscribe(res => console.log(res));
  }

}
