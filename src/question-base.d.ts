import { Subject } from "rxjs/Subject";
export declare class QuestionBase<T> {
    parent: QuestionBase<T>[];
    value: T;
    key: string;
    label: string;
    required: boolean;
    readonly: boolean;
    controlType: string;
    type: string;
    validateFn: validateFn[];
    validateErrors: string;
    questionSubject: QuestionSubject;
    constructor(options?: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        controlType?: string;
        type?: string;
        readonly?: boolean;
        validateFn?: validateFn[];
        validateErrors?: string;
        questionSubject?: QuestionSubject;
    });
}
export declare class validateFn {
    name: string;
    param: any;
}
export interface GetOptions<T> {
}
export declare class QuestionSubject {
    subject: Subject<any>;
    observer: Subject<any>;
    observer_key: any[];
    subject_param: any;
}
export declare class QuestionDataSource {
    allowEmpty: boolean;
    unWanted: string[];
    emptyText: string;
    constructor(options?: {
        allowEmpty?: boolean;
        unWanted?: string[];
        emptyText?: string;
    });
}
export declare class QuestionEnummap extends QuestionDataSource {
    enumType: string;
    loader: GetOptions<any[]>;
    loaderFn: string;
    constructor(options?: {});
}
export declare class QuestionLoader extends QuestionDataSource {
    loader: GetOptions<any[]>;
    loaderFn: string;
    param: any;
    displayField: string;
    valueField: string;
    constructor(options?: {});
}
