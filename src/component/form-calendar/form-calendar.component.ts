import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../question.service";
import {CalendarQuestion} from "./question-calendar";

@Component({
  selector: 'app-form-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.css']
})
export class FormCalendarComponent implements OnInit {

  china: any = {
    firstDayOfWeek: 0,
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  };

  constructor(private qS: QuestionService) {
  }

  ngOnInit() {
  }

  @Input() question: CalendarQuestion;

  // value 属性，以 get 方式拦截
  get value(): any {
    return this.question.value;
  }

  @Input() set value(v: any) {//多重验证 validate + 自定义验证函数
    this.question = this.qS.valueValidate(v,this.question);
  }
}
