import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private resource = '/forms';

  constructor(private http: HttpClient) {

  }

  getForms(): Observable<any> {
    return this.http.get(apiUrl(this.resource));
  }

  getForm(form_id): Observable<any> {
    return this.http.get(apiUrl(this.resource, form_id));
  }

  createForm(form_params): Observable<any> {
    return this.http.post(apiUrl(this.resource), form_params);
  }

  updateForm(form_id, form_params): Observable<any> {    
    return this.http.put(apiUrl(this.resource, form_id), form_params);
  }

  destroyForm(form_id): Observable<any> {
    return this.http.delete(apiUrl(this.resource, form_id));
  }
}
