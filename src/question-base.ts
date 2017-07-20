import {Subject} from "rxjs/Subject";
export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  readonly:boolean;
  controlType: string;
  type:string;
  // disabled:boolean;
  validateFn:validateFn[];
  validateErrors: string;
  // 更新数据源，相关参数
  subject:Subject<any>;//观察者
  observer:Subject<any>;//被观察者
  observer_key:any[];
  param:any;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    controlType?: string,
    type?:string,
    readonly?:boolean,
    // disabled?:boolean,
    validateFn?:validateFn[],
    validateErrors?:string
    subject?:Subject<any>;
    observer?:Subject<any>;
    param?:any;
    observer_key?:any[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required || false;
    this.controlType = options.controlType || '';
    this.type = options.type || 'text';
    this.readonly = options.readonly || false;
    // this.disabled = options.disabled || false;
    this.validateFn = options.validateFn || [];
    this.validateErrors = options.validateErrors || '';
    this.subject = options.subject || null;
    this.observer = options.observer || null;
    this.observer_key = options['observer_key'] || [];
    this.param = options['param'] || null;
  }
}

export class validateFn {
  name:string;
  param:any;
}

export interface GetOptions<T> {
  getOptions(param?: RequestParam): Promise<T[]>;
  loadOptions(param?: any): Promise<T[]>;
}

export class RequestParam {
  url:string;
  condition:any;
}
