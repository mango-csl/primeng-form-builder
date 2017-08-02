import {SelectItem} from "primeng/primeng";
import {QuestionBase, QuestionEnummap, QuestionLoader} from "../../question-base";

export class MultiselectQuestion extends QuestionBase<any[]> {
  controlType:string = 'multiselect';
  questionEnummap:QuestionEnummap;
  questionLoader:QuestionLoader;
  items:SelectItem[];
  defaultLabel:string;

  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
    this.defaultLabel = options['defaultLabel'] || '请选择';
    this.questionEnummap = options['questionEnummap'] || null;
    this.questionLoader = options['questionLoader'] || null;
  }
}
