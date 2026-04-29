import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private httpclient: HttpClient) { }

  //Get cards list
  getCardsList(): Observable<any>{
    return this.httpclient.get(this.baseUrl + 'cards');
  }

  //Get skill list
  getSkillList(): Observable<any>{
    return this.httpclient.get(this.baseUrl + 'skills');
  }
}
