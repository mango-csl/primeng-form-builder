import {Injectable}       from '@angular/core';

import {QuestionBase}     from './question-base';

@Injectable()
export class QuestionService {

  constructor() {

  }

  beiginValidate(question: QuestionBase<any>) {
    let text: string = '';
    if (question.required || question.validateFn.length > 0) {
      if (this.judgeIsEmpty(question.value)) {
        text = '*必填项' + '<BR/>';
      } else {
        for (const key of question.validateFn) {
          if (!!this.judge[key.name]) {
            text += this.judge[key.name](question, key.param);
          }
        }
      }
    }
    question.validateErrors = text;
  }

  valueValidate(value: any, question: any): any {
    if (value !== question.value) {
      question.value = value;
      this.beiginValidate(question);//开始自定义函数验证
      this.sendMesAfterChange(question);
    }
    return question;
  }

// 验证规则
  judge = {
    'numberRange': (question: QuestionBase<any>, param: any): string => {
      let value = question.value;
      // this.formErrors[this.question.key] = '';
      let re: any = /^-?[1-9]\d*|0$/;//初步正则匹配
      if (!re.test(value)) {
        // if(value !== '-'){
        // this.formErrors[this.question.key] += '*请输入数字' + '<BR/>';
        return '*请输入数字' + '<BR/>';
        // }
      }
      value = Number(value);
      if (param) {
        if (param.min !== undefined) {
          if (value < param.min) {
            // this.formErrors[this.question.key] += '*请输入大于' + param.min + '的数字' + '<BR/>';
            return '*请输入大于' + param.min + '的数字' + '<BR/>';
          }
        }
        if (param.max !== undefined) {
          if (value > param.max) {
            // this.formErrors[this.question.key] += '*请输入小于' + param.max + '的数字' + '<BR/>';
            return '*请输入小于' + param.max + '的数字' + '<BR/>';
          }
        }
      }
      return '';
    },
    'phone': (question: QuestionBase<any>, param: any): string => {
      let value = question.value;
      let MOBILE_REGEXP = /^1[0-9]{10,10}$/;
      if (!MOBILE_REGEXP.test(value)) {
        // this.formErrors[this.question.key] += '*请输入数字' + '<BR/>';
        return '*请输入正确的手机号码' + '<BR/>';
      }
    },
    'customize': (question: QuestionBase<any>, param: any): string => {
      return param.fn(question.parent);
    }
  };

  //判断参数是否为空
  judgeIsEmpty(data): boolean {
    if ('[object Array]' === Object.prototype.toString.call(data)) {
      if (data.length == 0) {
        return true;
      }
    }
    if ('[object Undefined]' === Object.prototype.toString.call(data)) {
      return true;
    }
    if ('[object Null]' === Object.prototype.toString.call(data)) {
      return true;
    }
    if ('[object Object]' === Object.prototype.toString.call(data)) {
      if (Object.keys(data).length == 0) {
        return true;
      }
    }
    return false;
  }

//判断数据源查询条件是否完整
  paramInspect(param: any, key: any[]): boolean {
    let param_inspect = true;
    if (param) {
      for (let item of key) {
        if (this.judgeIsEmpty(param[item])) {
          param_inspect = false;
          break;
        }
      }
    } else {
      param_inspect = false;
    }
    return param_inspect;
  }

  //值改变后向相关联的组件发送消息
  sendMesAfterChange(question: QuestionBase<any>) {
    let subject_option = question.questionSubject;
    if (subject_option) {
      if (subject_option.subject) {
        let send_data: any = question.validateErrors == '' ? question.value : null;
        //添加参数
        subject_option.subject_param[question.key] = send_data;
        subject_option.subject.next(subject_option.subject_param);
      }
    }
  }
}
