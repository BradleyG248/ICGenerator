import { Injectable } from '@angular/core';
import Axios from "axios";
import { Observable } from 'rxjs';
let baseUrl = "https://localhost:5001"

let api = Axios.create({
  baseURL: baseUrl + "/api",
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
  }
});

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {
  }
  polls = [];
  async getPolls() {
    console.log("aye")
    let res = await api.get("polls");
    console.log(res);
    this.polls = res.data;
    return this.polls;
  }
}
