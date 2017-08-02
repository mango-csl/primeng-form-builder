import { OnInit } from '@angular/core';
import { CalendarQuestion } from "./question-calendar";
import { QuestionService } from "../../question.service";
export declare class FormCalendarComponent implements OnInit {
    private qS;
    china: any;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    question: CalendarQuestion;
    value: any;
}
