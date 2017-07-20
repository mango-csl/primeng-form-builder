import { QuestionBase } from '../../question-base';

export class CalendarQuestion extends QuestionBase<Date> {
  controlType = 'calendar';
  placeholder:string;
  monthNavigator:boolean;
  yearNavigator:boolean;
  yearRange:string;
  showTime:boolean;
  timeOnly:boolean;
  showIcon:boolean;
  minDate:Date;
  maxDate:Date;
  readonlyInput:boolean;
  dateFormat:string;
  constructor(options: {} = {}) {
    super(options);
    this.monthNavigator = options['monthNavigator'] || false;
    this.yearNavigator = options['yearNavigator'] || false;
    this.yearRange = options['yearRange'] || '2016:2050';
    this.showTime = options['showTime'] || false;
    this.timeOnly = options['timeOnly'] || false;
    this.showIcon = options['showIcon'] || true;
    this.minDate = options['minDate'] || null;
    this.maxDate = options['maxDate'] || new Date();
    this.readonlyInput = options['readonlyInput'] || true;
    this.dateFormat = options['dateFormat'] || 'yy-mm-dd';
  }
}
