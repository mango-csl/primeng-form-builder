import { SelectItem } from "primeng/primeng";
import { QuestionBase, QuestionEnummap, QuestionLoader } from "../../question-base";
export declare class DropdownQuestion extends QuestionBase<string> {
    controlType: string;
    items: SelectItem[];
    placeholder: string;
    questionEnummap: QuestionEnummap;
    questionLoader: QuestionLoader;
    constructor(options?: {});
}
