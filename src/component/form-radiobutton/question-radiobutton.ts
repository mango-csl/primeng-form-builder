import {SelectItem} from "primeng/primeng";
import {QuestionBase} from "../../question-base";

export class RadiobuttonQuestion extends QuestionBase<string> {
  controlType = 'radiobutton';
  items: SelectItem[];
  constructor(options: {} = {}) {
    super(options);
    this.items = options['items'] || [];
  }
}
