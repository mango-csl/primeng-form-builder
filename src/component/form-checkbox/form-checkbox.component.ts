import {Component, Input, OnInit} from '@angular/core';
import {CheckboxQuestion} from "./question-checkbox";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {

  @Input() question: CheckboxQuestion;

  constructor(private qS: QuestionService) {
  }

  ngOnInit() {
    if(this.question.items.length > 0){
      this.question.value.push(this.question.items[0].value);
    }
  }

  // value 属性，以 get 方式拦截
  get value(): any {
    return this.question.value;
  }

  @Input() set value(v: any) {//多重验证 validate + 自定义验证函数
    this.question = this.qS.valueValidate(v,this.question);
  }
}
