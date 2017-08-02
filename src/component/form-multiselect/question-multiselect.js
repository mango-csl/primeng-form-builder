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
var MultiselectQuestion = (function (_super) {
    __extends(MultiselectQuestion, _super);
    function MultiselectQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'multiselect';
        _this.items = options['items'] || [];
        _this.defaultLabel = options['defaultLabel'] || '请选择';
        _this.questionEnummap = options['questionEnummap'] || null;
        _this.questionLoader = options['questionLoader'] || null;
        return _this;
    }
    return MultiselectQuestion;
}(question_base_1.QuestionBase));
exports.MultiselectQuestion = MultiselectQuestion;
//# sourceMappingURL=question-multiselect.js.map