import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private resource = '/answers';

  constructor(private http: HttpClient) { }

  getAnswers(form_id): Observable<any> {
    return this.http.get(apiUrl(this.resource), {params: {form_id: form_id}});
  }

  getAnswer(answer_id): Observable<any> {
    return this.http.get(apiUrl(this.resource, answer_id));
  }

  createAnswer(answer_params): Observable<any> {
    return this.http.post(apiUrl(this.resource), answer_params);
  }

  destroyAnswer(answer_id): Observable<any> {
    return this.http.delete(apiUrl(this.resource, answer_id));
  }
}
