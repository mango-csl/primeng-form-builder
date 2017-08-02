import { OnInit, EventEmitter } from '@angular/core';
import { QuestionBase } from "../../question-base";
import { OperateOption } from "../../operate-option";
import { QuestionService } from "../../question.service";
export declare class FormComponent implements OnInit {
    private qS;
    questions: QuestionBase<any>[];
    operateOption: OperateOption<any>;
    submitData: EventEmitter<any>;
    cancel: EventEmitter<any>;
    constructor(qS: QuestionService);
    ngOnInit(): void;
    beforSubmit(questions: QuestionBase<any>[]): void;
    private formState();
    getFormData(): any;
    onSubmit(): void;
}
