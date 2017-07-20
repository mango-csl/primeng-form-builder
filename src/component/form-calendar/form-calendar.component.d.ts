import { OnInit } from '@angular/core';
import { QuestionService } from "../../question.service";
import { CalendarQuestion } from "./question-calendar";
export declare class FormCalendarComponent implements OnInit {
    private qS;
    china: any;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    question: CalendarQuestion;
    value: any;
}
