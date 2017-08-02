import { OnDestroy, OnInit } from '@angular/core';
import { ContextmenuQuestion } from "./question-contextmenu";
import { QuestionService } from "../../question.service";
export declare class FormContextmenuComponent implements OnInit, OnDestroy {
    private qS;
    question: ContextmenuQuestion;
    private subscribe;
    showData: string;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    showDialog(): void;
    ngOnDestroy(): void;
}
