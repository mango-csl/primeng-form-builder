import {SelectItem} from "primeng/primeng";
import {QuestionBase, QuestionEnummap, QuestionLoader} from "../../question-base";

export class DropdownQuestion extends QuestionBase<string> {
  controlType:string = 'dropdown';
  items:SelectItem[];
  placeholder:string;
  questionEnummap:QuestionEnummap;
  questionLoader:QuestionLoader;
  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
    this.placeholder = options['placeholder'] || '请选择';
    this.questionEnummap = options['questionEnummap'] || null;
    this.questionLoader = options['questionLoader'] || null;
  }
}
