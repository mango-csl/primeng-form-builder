import { QuestionBase } from './question-base';
export declare class QuestionService {
    constructor();
    beiginValidate(question: QuestionBase<any>): string;
    valueValidate(value: any, question: any): any;
    judge: {
        'numberRange': (value: any, param: any) => string;
        'phone': (value: any) => string;
    };
    judgeIsEmpty(data: any): boolean;
    paramInspect(param: any, key: any[]): boolean;
    sendMesAfterChange(question: QuestionBase<any>): void;
}
