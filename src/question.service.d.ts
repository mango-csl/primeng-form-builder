import { QuestionBase } from './question-base';
export declare class QuestionService {
    constructor();
    beiginValidate(question: QuestionBase<any>): void;
    valueValidate(value: any, question: any): any;
    judge: {
        'numberRange': (question: QuestionBase<any>, param: any) => string;
        'phone': (question: QuestionBase<any>, param: any) => string;
        'customize': (question: QuestionBase<any>, param: any) => string;
    };
    judgeIsEmpty(data: any): boolean;
    paramInspect(param: any, key: any[]): boolean;
    sendMesAfterChange(question: QuestionBase<any>): void;
}
