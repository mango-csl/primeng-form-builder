import {SelectItem} from "primeng/primeng";
import {QuestionBase} from "../../question-base";

export class CheckboxQuestion extends QuestionBase<any[]> {
  controlType = 'checkbox';
  items: SelectItem[];
  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
    this.value = options['value'] || [];
  }
}
