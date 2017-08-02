import { OnInit } from '@angular/core';
import { RadiobuttonQuestion } from "./question-radiobutton";
import { QuestionService } from "../../question.service";
export declare class FormRadiobuttonComponent implements OnInit {
    private qS;
    question: RadiobuttonQuestion;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    value: any;
}
