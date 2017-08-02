import {QuestionBase} from "../../question-base";
export class ImageQuestion extends QuestionBase<string> {
  controlType = 'image';
  multiple: boolean;
  accept:string;
  files: File[];
  imageUrl:string;
  constructor(options: {} = {}) {
    super(options);
    this.multiple = options['multiple'] || false;
    this.accept = options['accept'] || '.jpg,.jpeg,.gif,.png,.bmp';
    this.files = options['files'] || [];
    this.imageUrl = options['imageUrl'] || '';
  }
}
