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
        // this.subject = options.subject || null;
        // this.observer = options.observer || null;
        // this.observer_key = options['observer_key'] || [];
        // this.subject_param = options['subject_param'] || null;
        this.questionSubject = options.questionSubject || null;
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
var QuestionSubject = (function () {
    function QuestionSubject() {
        // 更新数据源，相关参数
        this.subject = null; //观察者
        this.observer = null; //被观察者
        this.observer_key = [];
        this.subject_param = null;
    }
    return QuestionSubject;
}());
exports.QuestionSubject = QuestionSubject;
var QuestionDataSource = (function () {
    function QuestionDataSource(options) {
        if (options === void 0) { options = {}; }
        this.unWanted = options.unWanted || [];
        this.allowEmpty = options.allowEmpty != undefined ? options.allowEmpty : true;
        this.emptyText = options.emptyText || '全部';
    }
    return QuestionDataSource;
}());
exports.QuestionDataSource = QuestionDataSource;
var QuestionEnummap = (function (_super) {
    __extends(QuestionEnummap, _super);
    function QuestionEnummap(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.enumType = options['enumType'] || null;
        _this.loader = options['loader'] || null;
        _this.loaderFn = options['loaderFn'] || null;
        return _this;
    }
    return QuestionEnummap;
}(QuestionDataSource));
exports.QuestionEnummap = QuestionEnummap;
var QuestionLoader = (function (_super) {
    __extends(QuestionLoader, _super);
    function QuestionLoader(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.param = options['enumType'] || null;
        _this.loader = options['loader'] || null;
        _this.loaderFn = options['loaderFn'] || 'loadOptions';
        _this.displayField = options['displayField'] || null;
        _this.valueField = options['valueField'] || null;
        return _this;
    }
    return QuestionLoader;
}(QuestionDataSource));
exports.QuestionLoader = QuestionLoader;
//# sourceMappingURL=question-base.js.map