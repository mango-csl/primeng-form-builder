import {Component, OnInit, Input} from '@angular/core';
import {QuestionBase} from "../../question-base";

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() question: QuestionBase<any>;
}
