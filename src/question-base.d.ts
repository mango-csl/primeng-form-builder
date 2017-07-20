import { Subject } from "rxjs/Subject";
export declare class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    readonly: boolean;
    controlType: string;
    type: string;
    validateFn: validateFn[];
    validateErrors: string;
    subject: Subject<any>;
    observer: Subject<any>;
    observer_key: any[];
    param: any;
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
        subject?: Subject<any>;
        observer?: Subject<any>;
        param?: any;
        observer_key?: any[];
    });
}
export declare class validateFn {
    name: string;
    param: any;
}
export interface GetOptions<T> {
    getOptions(param?: RequestParam): Promise<T[]>;
    loadOptions(param?: any): Promise<T[]>;
}
export declare class RequestParam {
    url: string;
    condition: any;
}
