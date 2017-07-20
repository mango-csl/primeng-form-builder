import { OnInit } from '@angular/core';
import { QuestionService } from "../../question.service";
import { RadiobuttonQuestion } from "./question-radiobutton";
export declare class FormRadiobuttonComponent implements OnInit {
    private qS;
    question: RadiobuttonQuestion;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    value: any;
}
