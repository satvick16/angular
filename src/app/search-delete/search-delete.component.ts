import { Component, OnInit } from '@angular/core';
import { GreetingCreatorService } from '../greeting-creator.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent {

  id!: number;
  history?: string[][];

  constructor(private service:GreetingCreatorService) {}

  ngOnInit() {
    
  }

  public findGreetingHistory() {
    this.service.getHistory(this.id).subscribe((data) => (this.history = data));
  }

}
