import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userName!: string;
  @Input() userText!: string;
  @Input() userImage!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
