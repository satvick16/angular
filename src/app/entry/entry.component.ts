import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {

  @Input() entry!: string[];

  constructor() { }

  ngOnInit(): void {

  }

}
