import {QuestionBase} from "../../question-base";
export class ContextmenuQuestion extends QuestionBase<any> {
  controlType = 'contextmenu';
  placeholder:string;
  contextmenu:any;
  icon:string;
  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'] || '';
    this.contextmenu = options['contextmenu'] || null;
    this.icon = options['icon'] || 'fa-home';
  }
}
