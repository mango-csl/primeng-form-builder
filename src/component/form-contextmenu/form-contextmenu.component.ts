import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContextmenuQuestion} from "./question-contextmenu";
import {Subscription} from "rxjs/Subscription";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-form-contextmenu',
  templateUrl: './form-contextmenu.component.html',
  styleUrls: ['./form-contextmenu.component.css']
})
export class FormContextmenuComponent implements OnInit,OnDestroy {

  @Input() question: ContextmenuQuestion;
  private subscribe: Subscription;
  showData: string;

  constructor(
    private qS: QuestionService
  ) {
  }

  ngOnInit() {
    this.subscribe = this.question.contextmenu.sendMes.subscribe(msg => {
      this.showData = msg.label;
      this.qS.valueValidate(msg.value,this.question);//验证
    });

    if(this.question.value){//编辑状态下处理
      this.question.contextmenu.dataTransform(this.question.value);
      // if(this.question.subject){
      //   this.question.subject.next(this.question.value);
      // }
    }
  }

  showDialog() {
    this.question.contextmenu.show(this.question.value);
  }


  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  //待修改 打开时选中数据项
}
