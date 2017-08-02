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
var question_contextmenu_1 = require("./question-contextmenu");
var question_service_1 = require("../../question.service");
var FormContextmenuComponent = (function () {
    function FormContextmenuComponent(qS) {
        this.qS = qS;
    }
    FormContextmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.question.contextmenu.sendMes.subscribe(function (msg) {
            _this.showData = msg.label;
            _this.qS.valueValidate(msg.value, _this.question); //验证
        });
        if (this.question.value) {
            this.question.contextmenu.dataTransform(this.question.value);
            // if(this.question.subject){
            //   this.question.subject.next(this.question.value);
            // }
        }
    };
    FormContextmenuComponent.prototype.showDialog = function () {
        this.question.contextmenu.show(this.question.value);
    };
    FormContextmenuComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    return FormContextmenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_contextmenu_1.ContextmenuQuestion)
], FormContextmenuComponent.prototype, "question", void 0);
FormContextmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-form-contextmenu',
        templateUrl: './form-contextmenu.component.html',
        styleUrls: ['./form-contextmenu.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], FormContextmenuComponent);
exports.FormContextmenuComponent = FormContextmenuComponent;
//# sourceMappingURL=form-contextmenu.component.js.map