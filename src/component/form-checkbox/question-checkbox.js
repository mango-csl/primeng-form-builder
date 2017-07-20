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
var CheckboxQuestion = (function (_super) {
    __extends(CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.items = options['items'] || [];
        _this.value = options['value'] || [];
        return _this;
    }
    return CheckboxQuestion;
}(question_base_1.QuestionBase));
exports.CheckboxQuestion = CheckboxQuestion;
//# sourceMappingURL=question-checkbox.js.map