import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../question.service";
import {RadiobuttonQuestion} from "./question-radiobutton";

@Component({
  selector: 'app-form-radiobutton',
  templateUrl: './form-radiobutton.component.html',
  styleUrls: ['./form-radiobutton.component.css']
})
export class FormRadiobuttonComponent implements OnInit {

  @Input() question: RadiobuttonQuestion;

  constructor(private qS: QuestionService) {
  }

  ngOnInit() {
    if(this.question.items.length > 0){
      this.question.value = this.question.items[0].value;
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
