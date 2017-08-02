import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {QuestionBase} from "../../question-base";
import {OperateOption} from "../../operate-option";
import {QuestionService} from "../../question.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    @Input() operateOption: OperateOption<any> = new OperateOption();

    @Output() submitData = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<any>();

    constructor(private qS: QuestionService) {
    }

    ngOnInit() {
        switch (this.operateOption.type) {
            case 'query':
                this.questions.forEach(data => {
                    data.value = this.operateOption.data[data.key];
                    data.readonly = true;
                    data.validateErrors = '';
                });
                break;
            case 'add':
                this.questions.forEach(data => {
                    data.value = null;
                    data.readonly = false;
                    data.validateErrors = '';
                    data.parent = this.questions;
                });
                break;
            case 'edit':
                this.questions.forEach(data => {
                    data.value = this.operateOption.data[data.key];
                    data.readonly = false;
                    data.parent = this.questions;
                });
                break;
        }
        if (this.operateOption.type == 'edit') {//值都赋进去后再验证
            this.beforSubmit(this.questions);
        }
    }

    // 表单赋值前验证
    // validate(data:QuestionBase<any>){
    //   // let text:string = ''
    //   if(data.required|| data.validateFn.length > 0){
    //     data.validateErrors = this.qS.beiginValidate(data);
    //       // text = this.qS.beiginValidate(data);
    //   }
    //   // return text;
    // }

    //表单提交前验证
    beforSubmit(questions: QuestionBase<any>[]) {
        for (const item of questions) {
            // item.validateErrors =
            //   this.validate(item);
            this.qS.beiginValidate(item);
        }
    }

    //表单验证状态
    private formState(): boolean {
        for (const item of this.questions) {
            if (item.validateErrors != '') {
                return false;
            }
        }
        return true;
    }

    //获取表单数据
    getFormData(): any {
        let data: any = {};
        for (const item of this.questions) {
            data[item.key] = item.value;
        }
        return data;
    }

    onSubmit() {
        // for(const item of this.questions){
        //   if(item.validateErrors != ''){
        //     this.payLoad = '';
        //     return false;
        //   }
        // }
        this.beforSubmit(this.questions);
        if (this.formState()) {
            this.submitData.emit(this.getFormData());
        } else {
            // this.msgService.showError("表单错误", "验证未通过");
            console.error("表单错误", "验证未通过");
        }
    }
}
