import { OnDestroy, OnInit } from '@angular/core';
import { SelectItem } from "primeng/primeng";
import { DropdownQuestion } from "./question-dropdown";
import { QuestionService } from "../../question.service";
import { QuestionDataSource } from "../../question-base";
export declare class FormDropdownComponent implements OnInit, OnDestroy {
    private qS;
    question: DropdownQuestion;
    items: SelectItem[];
    private subscribe;
    value: any;
    constructor(qS: QuestionService);
    refresh(): void;
    onDataload(items: SelectItem[]): void;
    createItems(option: QuestionDataSource): SelectItem[];
    ngOnInit(): void;
    ngOnDestroy(): void;
}
