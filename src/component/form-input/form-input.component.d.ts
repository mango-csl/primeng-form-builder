import { OnDestroy, OnInit } from '@angular/core';
import { TextboxQuestion } from "./question-textbox";
import { QuestionService } from "../../question.service";
export declare class AppFormInputComponent implements OnInit, OnDestroy {
    private qS;
    ngOnDestroy(): void;
    question: TextboxQuestion;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    value: any;
}
