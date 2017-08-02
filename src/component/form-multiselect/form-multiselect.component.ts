import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MultiselectQuestion} from "./question-multiselect";
import {SelectItem} from "primeng/primeng";
import {Subscription} from "rxjs/Subscription";
import {QuestionService} from "../../question.service";
import {QuestionDataSource} from "../../question-base";

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.css']
})
export class FormMultiselectComponent implements OnInit, OnDestroy {

  @Input() question: MultiselectQuestion;
  private subscribe: Subscription;
  items: SelectItem[] = [];

  value: any[] = [];

  constructor(private qS: QuestionService) {
  }

  refresh() {
    if (this.question.questionLoader) {
      let loader_option = this.question.questionLoader;
      if (this.question.questionSubject) {
        loader_option.param = this.question.questionSubject.subject_param;// 当存在消息监听时,查询参数会实时改变
      }
      loader_option.loader[loader_option.loaderFn](loader_option.param).then(items => {
        this.items = this.createItems(loader_option);
        items.forEach(item => {
          let can_push: boolean = true;
          if (loader_option.unWanted.length > 0) {//过滤不需要的选项
            for (const key of loader_option.unWanted) {
              if (item[loader_option.valueField] == key) {can_push = true;break;}
            }
          }
          if (can_push) {this.items.push({label: item[loader_option.displayField], value: item[loader_option.valueField]});}
        });
        this.onDataload(this.items);
      });
    } else if (this.question.questionEnummap) {//枚举表查询
      let enummap_option = this.question.questionEnummap;
      enummap_option.loader[enummap_option.loaderFn](enummap_option.enumType).then(ems => {
        this.items = this.createItems(enummap_option);
        ems.forEach(em => {
          let can_push: boolean = true;
          if (enummap_option.unWanted.length > 0) {//过滤不需要的选项
            for (const item of enummap_option.unWanted) {
              if (em.value == item) {can_push = false;break;}
            }
          }
          if (can_push) {this.items.push({label: em.name, value: em.value});}
        });
        this.onDataload(this.items);
      });
    } else if (this.question.items) {//直接赋值items
      this.onDataload(this.question.items);
      this.items = this.question.items;
    }
  }

  onDataload(items: SelectItem[]) {
    if (Boolean(this.question.value)) {
      this.value = this.question.value;//在items请求过来后，再赋值，否则会出线显示null
    }

    if (!this.question.questionSubject) {//当存在消息发送时，不赋予默认值
      if(!this.question.questionSubject.subject){
        if (items && items.length > 0 && this.value.length == 0) {
          this.value.push(items[0].value);
        }
      }
    }
  }

  createItems(option:QuestionDataSource): SelectItem[] {
    let items: SelectItem[] = [];
    if (option.allowEmpty) {
      this.question.required = false;
      items.push({label: option.emptyText, value: null})
    }
    return items;
  }

  onChange(event) {
    this.question.value = event.value;
    this.qS.beiginValidate(this.question);//开始自定义函数验证
    this.qS.sendMesAfterChange(this.question);
  }

  ngOnInit() {
    if (!Boolean(this.question.value)) {
      this.question.value = [];//初始化
    }
    if (this.question.questionSubject) {
      let subject_option = this.question.questionSubject;
      //检查数据源查询条件是否完整
      if (this.qS.paramInspect(subject_option.subject_param, subject_option.observer_key)) {
        //编辑状态下 直接传入param，查询出items
        this.refresh();
        // this.question.readonly = false;
      } else {
        this.question.readonly = true;
      }
      this.subscribe = subject_option.observer.subscribe(msg => {
        this.question.value = this.value = null;
        this.qS.sendMesAfterChange(this.question);
        subject_option.subject_param = msg;
        //当传递的参数不完整时
        if (this.qS.paramInspect(subject_option.subject_param, subject_option.observer_key)) {
          this.refresh();
          this.question.readonly = false;
        } else {
          this.question.readonly = true;
          this.items = null;
        }
      });
    } else {
      this.refresh();
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
