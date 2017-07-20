import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TextboxQuestion} from "./question-textbox";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class AppFormInputComponent implements OnInit,OnDestroy {
  ngOnDestroy(){
  }

  @Input() question: TextboxQuestion;

  constructor(private qS: QuestionService) {
  }

  ngOnInit() {
  }

  // value 属性，以 get 方式拦截
  get value(): any {
    return this.question.value;
  }

  @Input() set value(v: any) {//多重验证 validate + 自定义验证函数
    this.question = this.qS.valueValidate(v,this.question);
  }
}
