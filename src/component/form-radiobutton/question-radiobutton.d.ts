import { QuestionBase } from '../../question-base';
import { SelectItem } from "primeng/primeng";
export declare class RadiobuttonQuestion extends QuestionBase<string> {
    controlType: string;
    items: SelectItem[];
    constructor(options?: {});
}
