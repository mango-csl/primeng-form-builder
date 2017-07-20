import { QuestionBase } from '../../question-base';
import {SelectItem} from "primeng/primeng";

export class CheckboxQuestion extends QuestionBase<any[]> {
  controlType = 'checkbox';
  items: SelectItem[];
  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
    this.value = options['value'] || [];
  }
}
