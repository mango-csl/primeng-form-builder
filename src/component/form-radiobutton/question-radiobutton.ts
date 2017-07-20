import { QuestionBase } from '../../question-base';
import {SelectItem} from "primeng/primeng";

export class RadiobuttonQuestion extends QuestionBase<string> {
  controlType = 'radiobutton';
  items: SelectItem[];
  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
  }
}
