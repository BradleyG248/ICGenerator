import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../Services/dashboard.service";
import { from } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private _ds: DashboardService
  ) {
    this.getPolls();
  }
  polls = [Object];
  ngOnInit(): void {

  }


  async getPolls() {
    this.polls = await this._ds.getPolls();
    console.log(this.polls);
  }
}
