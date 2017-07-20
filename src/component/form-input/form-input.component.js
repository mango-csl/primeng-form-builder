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
var question_textbox_1 = require("./question-textbox");
var question_service_1 = require("../../question.service");
var AppFormInputComponent = (function () {
    function AppFormInputComponent(qS) {
        this.qS = qS;
    }
    AppFormInputComponent.prototype.ngOnDestroy = function () {
    };
    AppFormInputComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AppFormInputComponent.prototype, "value", {
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
    return AppFormInputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_textbox_1.TextboxQuestion)
], AppFormInputComponent.prototype, "question", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AppFormInputComponent.prototype, "value", null);
AppFormInputComponent = __decorate([
    core_1.Component({
        selector: 'app-form-input',
        templateUrl: './form-input.component.html',
        styleUrls: ['./form-input.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], AppFormInputComponent);
exports.AppFormInputComponent = AppFormInputComponent;
//# sourceMappingURL=form-input.component.js.map