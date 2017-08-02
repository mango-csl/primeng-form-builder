import {Subject} from "rxjs/Subject";
export class QuestionBase<T> {
  parent:QuestionBase<T>[];
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
  // subject:Subject<any>;//观察者
  // observer:Subject<any>;//被观察者
  // observer_key:any[];
  // subject_param:any;
  questionSubject:QuestionSubject;


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
    // subject?:Subject<any>;
    // observer?:Subject<any>;
    // subject_param?:any;
    // observer_key?:any[];
    questionSubject?:QuestionSubject;
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
    // this.subject = options.subject || null;
    // this.observer = options.observer || null;
    // this.observer_key = options['observer_key'] || [];
    // this.subject_param = options['subject_param'] || null;
    this.questionSubject = options.questionSubject || null;
  }
}

export class validateFn {
  name:string;
  param:any;
}

export interface GetOptions<T> {
}

export class QuestionSubject {
  // 更新数据源，相关参数
  subject:Subject<any> = null;//观察者
  observer:Subject<any> = null;//被观察者
  observer_key:any[] = [];
  subject_param:any = null;
}

export class QuestionDataSource {
  allowEmpty:boolean;
  unWanted:string[];
  emptyText:string;

  constructor(options:{
    allowEmpty?:boolean;
    unWanted?:string[];
    emptyText?:string;
  }={}){
    this.unWanted = options.unWanted || [];
    this.allowEmpty = options.allowEmpty != undefined?options.allowEmpty:true;
    this.emptyText = options.emptyText || '全部';
  }
}

export class QuestionEnummap extends QuestionDataSource {
  enumType:string;
  loader:GetOptions<any[]>;
  loaderFn:string;
  constructor(options:{}={}){
    super(options);
    this.enumType = options['enumType'] || null;
    this.loader = options['loader'] || null;
    this.loaderFn = options['loaderFn'] || null;
  }
}

export class QuestionLoader extends QuestionDataSource {
  loader:GetOptions<any[]>;
  loaderFn:string;
  param:any;
  displayField:string;
  valueField:string;

  constructor(options:{}={}){
    super(options);
    this.param = options['enumType'] || null;
    this.loader = options['loader'] || null;
    this.loaderFn = options['loaderFn'] || 'loadOptions';
    this.displayField = options['displayField'] || null;
    this.valueField = options['valueField'] || null;
  }
}

