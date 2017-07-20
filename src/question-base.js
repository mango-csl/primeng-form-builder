"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required || false;
        this.controlType = options.controlType || '';
        this.type = options.type || 'text';
        this.readonly = options.readonly || false;
        // this.disabled = options.disabled || false;
        this.validateFn = options.validateFn || [];
        this.validateErrors = options.validateErrors || '';
        this.subject = options.subject || null;
        this.observer = options.observer || null;
        this.observer_key = options['observer_key'] || [];
        this.param = options['param'] || null;
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;
var validateFn = (function () {
    function validateFn() {
    }
    return validateFn;
}());
exports.validateFn = validateFn;
var RequestParam = (function () {
    function RequestParam() {
    }
    return RequestParam;
}());
exports.RequestParam = RequestParam;
//# sourceMappingURL=question-base.js.map