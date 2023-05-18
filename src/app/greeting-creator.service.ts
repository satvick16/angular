import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Greeting } from './Greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingCreatorService {

  constructor(private http:HttpClient) { }

  public getGreetings() {
    return this.http.get<Greeting[]>("http://localhost:8080/greeting");
  }

  public createGreeting(greeting: Greeting) {
    return this.http.post("http://localhost:8080/greeting?name=" + greeting.content, null, {responseType:'text' as 'json'});
  }

}
