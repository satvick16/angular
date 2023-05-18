import { Component, OnInit } from '@angular/core';
import { GreetingCreatorService } from '../greeting-creator.service';
import { Greeting } from '../Greeting';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent {

  greeting: Greeting = new Greeting(0, "");
  message: any;

  greetings: Greeting[] = [];

  constructor(private service:GreetingCreatorService) {}

  ngOnInit() {
    this.service.getGreetings().subscribe((list) => (this.greetings = list));
  }

  public createNow() {
    this.service.createGreeting(this.greeting).subscribe((data) => (this.message = data));
  }

}
