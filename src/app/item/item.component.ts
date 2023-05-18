import { Component, Input } from '@angular/core';
import { Greeting } from '../Greeting';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() greeting!: Greeting;

  constructor() { }

  ngOnInit(): void {

  }

}
