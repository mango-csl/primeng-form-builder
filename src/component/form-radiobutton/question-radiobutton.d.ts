import { SelectItem } from "primeng/primeng";
import { QuestionBase } from "../../question-base";
export declare class RadiobuttonQuestion extends QuestionBase<string> {
    controlType: string;
    items: SelectItem[];
    constructor(options?: {});
}
