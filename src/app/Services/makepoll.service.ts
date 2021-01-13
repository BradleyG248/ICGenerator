import { Injectable } from '@angular/core';
import Axios from "axios";
let url = "https://localhost:5001";
let api = Axios.create({
  baseURL: url + "/api",
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
  }
})

@Injectable({
  providedIn: 'root'
})
export class MakepollService {

  constructor() { }

  templates: object | any = {
    radio: `
      this is a radio
    `,
    check: ``
  }
  title: string = ""
  questions: Array<Object | any> = [{ name: "", type: 'radio', options: [] }];
  drawDetails(type: string, num: number): any {
    this.questions[num - 1].type = type;
    let details: HTMLElement | null = document.getElementById(`question${num}-details`);
    if (details) {
      details.innerHTML = this.templates[type];
    }
  }
  addQuestionField() {
  }
  addQuestion() {
    this.questions.push({ type: "radio", options: [] });
    console.log(this.questions);
  }
  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
    return false;
  }
  getQuestions() {
    return this.questions;
  }
  addOption(index: number) {
    this.questions[index].options.push({ name: "" });
    return this.questions[index].options;
  }
  deleteOption(question: number, option: number) {
    this.questions[question].options.splice(option, 1);
    return this.questions[question].options;
  }
  editName(name: string, index: number) {
    this.questions[index].name = name;
  }
  editOptionName(name: string, question: number, option: number) {
    this.questions[question].options[option].name = name;
  }
  editPollTitle(name: string) {
    this.title = name;
  }
  setType(type: string, question: number) {
    this.questions[question].type = type;
  }
  async createForm() {
    let res = await api.post("polls", { Name: this.title });
    console.log(res.data);
    this.questions.forEach(question => {
      this.createQuestion(question, res.data.id);
    })
  }
  async createQuestion(question: Object | any, pollId: number) {
    let res = await api.post("questions", { Name: question.name, Type: question.type, PollId: pollId });
    let options: Array<Object | any> = question.options;
    options.forEach(option => {
      this.createOption(option, res.data.id);
    })
  }
  async createOption(option: Object | any, questionId: number) {
    let res = await api.post("options", { Name: option.name, QuestionId: questionId });
  }
}
