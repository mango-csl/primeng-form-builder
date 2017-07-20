import { QuestionBase } from '../../question-base';
import { SelectItem } from "primeng/primeng";
export declare class CheckboxQuestion extends QuestionBase<any[]> {
    controlType: string;
    items: SelectItem[];
    constructor(options?: {});
}
