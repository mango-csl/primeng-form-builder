"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var question_base_1 = require("../../question-base");
var CalendarQuestion = (function (_super) {
    __extends(CalendarQuestion, _super);
    function CalendarQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'calendar';
        _this.monthNavigator = options['monthNavigator'] || false;
        _this.yearNavigator = options['yearNavigator'] || false;
        _this.yearRange = options['yearRange'] || '2016:2050';
        _this.showTime = options['showTime'] || false;
        _this.timeOnly = options['timeOnly'] || false;
        _this.showIcon = options['showIcon'] || true;
        _this.minDate = options['minDate'] || null;
        _this.maxDate = options['maxDate'] || new Date();
        _this.readonlyInput = options['readonlyInput'] || true;
        _this.dateFormat = options['dateFormat'] || 'yy-mm-dd';
        return _this;
    }
    return CalendarQuestion;
}(question_base_1.QuestionBase));
exports.CalendarQuestion = CalendarQuestion;
//# sourceMappingURL=question-calendar.js.map