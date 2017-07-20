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
var question_base_1 = require("../../question-base");
var FormElementComponent = (function () {
    function FormElementComponent() {
    }
    FormElementComponent.prototype.ngOnInit = function () {
    };
    return FormElementComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_base_1.QuestionBase)
], FormElementComponent.prototype, "question", void 0);
FormElementComponent = __decorate([
    core_1.Component({
        selector: 'app-form-element',
        templateUrl: './form-element.component.html',
        styleUrls: ['./form-element.component.css']
    }),
    __metadata("design:paramtypes", [])
], FormElementComponent);
exports.FormElementComponent = FormElementComponent;
//# sourceMappingURL=form-element.component.js.map