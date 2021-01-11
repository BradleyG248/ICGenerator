import { Injectable } from '@angular/core';

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
}
