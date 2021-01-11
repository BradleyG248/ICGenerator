import { Component, Input, OnInit } from '@angular/core';
import { MakepollService } from '../Services/makepoll.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  constructor(
    private _ms: MakepollService
  ) {

  }
  @Input() index: number | any;
  order: number = 0;
  options: Array<Object> = [];
  name: string = "";
  type: string = "radio";
  ngOnInit(): void {
    this.order = +this.index + 1;
  }
  addQuestionField() {
    this._ms.addQuestionField();
  }
  addQuestion() {
    this._ms.addQuestion();
  }
  deleteQuestion(index: number) {
    this._ms.deleteQuestion(index);
  }
  addOption(e: Event) {
    e.preventDefault();
    this.options = this._ms.addOption(this.index);
  }
  nameInput(e: Event | any) {
    this._ms.editName(e.target.value, this.index);
  }
  typeInput(e: Event | any) {
    this._ms.setType(e.target.value, this.index);
  }
}