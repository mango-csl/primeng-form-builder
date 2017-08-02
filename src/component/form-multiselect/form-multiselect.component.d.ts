import { OnDestroy, OnInit } from '@angular/core';
import { MultiselectQuestion } from "./question-multiselect";
import { SelectItem } from "primeng/primeng";
import { QuestionService } from "../../question.service";
import { QuestionDataSource } from "../../question-base";
export declare class FormMultiselectComponent implements OnInit, OnDestroy {
    private qS;
    question: MultiselectQuestion;
    private subscribe;
    items: SelectItem[];
    value: any[];
    constructor(qS: QuestionService);
    refresh(): void;
    onDataload(items: SelectItem[]): void;
    createItems(option: QuestionDataSource): SelectItem[];
    onChange(event: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
