import { QuestionBase } from '../../question-base';
export declare class CalendarQuestion extends QuestionBase<Date> {
    controlType: string;
    placeholder: string;
    monthNavigator: boolean;
    yearNavigator: boolean;
    yearRange: string;
    showTime: boolean;
    timeOnly: boolean;
    showIcon: boolean;
    minDate: Date;
    maxDate: Date;
    readonlyInput: boolean;
    dateFormat: string;
    constructor(options?: {});
}
