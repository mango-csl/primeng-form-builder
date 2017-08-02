import { SelectItem } from "primeng/primeng";
import { QuestionBase, QuestionEnummap, QuestionLoader } from "../../question-base";
export declare class MultiselectQuestion extends QuestionBase<any[]> {
    controlType: string;
    questionEnummap: QuestionEnummap;
    questionLoader: QuestionLoader;
    items: SelectItem[];
    defaultLabel: string;
    constructor(options?: {});
}
