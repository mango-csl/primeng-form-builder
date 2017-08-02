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
var question_calendar_1 = require("./question-calendar");
var question_service_1 = require("../../question.service");
var FormCalendarComponent = (function () {
    function FormCalendarComponent(qS) {
        this.qS = qS;
        this.china = {
            firstDayOfWeek: 0,
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        };
    }
    FormCalendarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FormCalendarComponent.prototype, "value", {
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
    return FormCalendarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_calendar_1.CalendarQuestion)
], FormCalendarComponent.prototype, "question", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormCalendarComponent.prototype, "value", null);
FormCalendarComponent = __decorate([
    core_1.Component({
        selector: 'app-form-calendar',
        templateUrl: './form-calendar.component.html',
        styleUrls: ['./form-calendar.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], FormCalendarComponent);
exports.FormCalendarComponent = FormCalendarComponent;
//# sourceMappingURL=form-calendar.component.js.map