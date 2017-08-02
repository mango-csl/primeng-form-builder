import { SelectItem } from "primeng/primeng";
import { QuestionBase } from "../../question-base";
export declare class CheckboxQuestion extends QuestionBase<any[]> {
    controlType: string;
    items: SelectItem[];
    constructor(options?: {});
}
