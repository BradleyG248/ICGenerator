import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.scss']
})
export class PollCardComponent implements OnInit {
  @Input() poll: Object | any;

  constructor() { }

  ngOnInit(): void {
  }

}
