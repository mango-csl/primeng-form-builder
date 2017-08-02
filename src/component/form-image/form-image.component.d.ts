import { OnInit } from '@angular/core';
import { ImageQuestion } from "./question-image";
export declare class FormImageComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    question: ImageQuestion;
    onChooseClick(event: any, fileInput: any): void;
    onFileSelect(event: any): void;
    isImage(file: any): boolean;
    onLoadend(event: any): void;
    cancel(): void;
}
