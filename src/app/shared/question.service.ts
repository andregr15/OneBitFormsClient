import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private resource = '/questions';

  constructor(private http: HttpClient) { }

  createQuestion(form_id, question_params): Observable<any> {
    return this.http.post(apiUrl(this.resource), {form_id: form_id, question_params});
  }

  updateQuestion(question_id, question_params): Observable<any> {
    return this.http.put(apiUrl(this.resource, question_id), question_params);
  }

  destroyQuestion(question_id): Observable<any> {
    return this.http.delete(apiUrl(this.resource, question_id));
  }
}
