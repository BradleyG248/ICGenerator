import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MakepollService } from '../Services/makepoll.service';

@Component({
  selector: 'app-makepoll',
  templateUrl: './makepoll.component.html',
  styleUrls: ['./makepoll.component.scss']
})
export class MakepollComponent implements OnInit {

  constructor(
    private _ms: MakepollService
  ) { }

  questions: Array<Object | any> = [];
  title: string = "Poll Title"
  ngOnInit(): void {
    this.questions = this._ms.getQuestions();
  }
  addQuestionField() {
    this._ms.addQuestionField();
  }
  addQuestion() {
    this._ms.addQuestion();
    this.questions = this._ms.getQuestions();
  }
  deleteQuestion(index: number) {
    this._ms.deleteQuestion(index);
    this.questions = this._ms.getQuestions();
  }
  titleInput(e: Event | any) {
    this._ms.editPollTitle(e.target.value);
    this.title = e.target.value;
  }
  createForm() {

  }
}
