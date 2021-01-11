import { Component, Input, OnInit } from '@angular/core';
import { MakepollService } from '../Services/makepoll.service';

@Component({
  selector: 'question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.scss']
})
export class QuestionOptionComponent implements OnInit {
  @Input() index: number | any;
  @Input() questionIndex: number | any;

  constructor(private _ms: MakepollService) { }
  value: string = "";
  ngOnInit(): void {
  }
  deleteOption() {
    this._ms.deleteOption(this.questionIndex, this.index);
  }
  optionInput(e: Event | any) {
    this._ms.editOptionName(e.target.value, this.questionIndex, this.index);
  }
}
