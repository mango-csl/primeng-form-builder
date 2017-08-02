import {QuestionBase} from "../../question-base";
export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  placeholder:string;
  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'] || '';
  }
}
