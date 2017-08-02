import { QuestionBase } from "../../question-base";
export declare class ImageQuestion extends QuestionBase<string> {
    controlType: string;
    multiple: boolean;
    accept: string;
    files: File[];
    imageUrl: string;
    constructor(options?: {});
}
