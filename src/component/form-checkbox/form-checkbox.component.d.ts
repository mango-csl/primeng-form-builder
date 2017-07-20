import { OnInit } from '@angular/core';
import { CheckboxQuestion } from "./question-checkbox";
import { QuestionService } from "../../question.service";
export declare class FormCheckboxComponent implements OnInit {
    private qS;
    question: CheckboxQuestion;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    value: any;
}
