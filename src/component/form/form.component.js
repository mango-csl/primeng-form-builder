"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operate_option_1 = require("../../operate-option");
var question_service_1 = require("../../question.service");
var FormComponent = (function () {
    function FormComponent(qS) {
        this.qS = qS;
        this.questions = [];
        this.operateOption = new operate_option_1.OperateOption();
        this.submitData = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.operateOption.type) {
            case 'query':
                this.questions.forEach(function (data) {
                    data.value = _this.operateOption.data[data.key];
                    data.readonly = true;
                    data.validateErrors = '';
                });
                break;
            case 'add':
                this.questions.forEach(function (data) {
                    data.value = null;
                    data.readonly = false;
                    data.validateErrors = '';
                    data.parent = _this.questions;
                });
                break;
            case 'edit':
                this.questions.forEach(function (data) {
                    data.value = _this.operateOption.data[data.key];
                    data.readonly = false;
                    data.parent = _this.questions;
                });
                break;
        }
        if (this.operateOption.type == 'edit') {
            this.beforSubmit(this.questions);
        }
    };
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
    FormComponent.prototype.beforSubmit = function (questions) {
        for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
            var item = questions_1[_i];
            // item.validateErrors =
            //   this.validate(item);
            this.qS.beiginValidate(item);
        }
    };
    //表单验证状态
    FormComponent.prototype.formState = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.validateErrors != '') {
                return false;
            }
        }
        return true;
    };
    //获取表单数据
    FormComponent.prototype.getFormData = function () {
        var data = {};
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var item = _a[_i];
            data[item.key] = item.value;
        }
        return data;
    };
    FormComponent.prototype.onSubmit = function () {
        // for(const item of this.questions){
        //   if(item.validateErrors != ''){
        //     this.payLoad = '';
        //     return false;
        //   }
        // }
        this.beforSubmit(this.questions);
        if (this.formState()) {
            this.submitData.emit(this.getFormData());
        }
        else {
            // this.msgService.showError("表单错误", "验证未通过");
            console.error("表单错误", "验证未通过");
        }
    };
    return FormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FormComponent.prototype, "questions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", operate_option_1.OperateOption)
], FormComponent.prototype, "operateOption", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormComponent.prototype, "submitData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormComponent.prototype, "cancel", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map