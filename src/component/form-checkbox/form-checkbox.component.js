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
var question_checkbox_1 = require("./question-checkbox");
var question_service_1 = require("../../question.service");
var FormCheckboxComponent = (function () {
    function FormCheckboxComponent(qS) {
        this.qS = qS;
    }
    FormCheckboxComponent.prototype.ngOnInit = function () {
        if (this.question.items.length > 0) {
            this.question.value.push(this.question.items[0].value);
        }
    };
    Object.defineProperty(FormCheckboxComponent.prototype, "value", {
        // value 属性，以 get 方式拦截
        get: function () {
            return this.question.value;
        },
        set: function (v) {
            this.question = this.qS.valueValidate(v, this.question);
        },
        enumerable: true,
        configurable: true
    });
    return FormCheckboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_checkbox_1.CheckboxQuestion)
], FormCheckboxComponent.prototype, "question", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormCheckboxComponent.prototype, "value", null);
FormCheckboxComponent = __decorate([
    core_1.Component({
        selector: 'app-form-checkbox',
        templateUrl: './form-checkbox.component.html',
        styleUrls: ['./form-checkbox.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], FormCheckboxComponent);
exports.FormCheckboxComponent = FormCheckboxComponent;
//# sourceMappingURL=form-checkbox.component.js.map