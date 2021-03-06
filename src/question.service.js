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
var QuestionService = (function () {
    function QuestionService() {
        // 验证规则
        this.judge = {
            'numberRange': function (question, param) {
                var value = question.value;
                // this.formErrors[this.question.key] = '';
                var re = /^-?[1-9]\d*|0$/; //初步正则匹配
                if (!re.test(value)) {
                    // if(value !== '-'){
                    // this.formErrors[this.question.key] += '*请输入数字' + '<BR/>';
                    return '*请输入数字' + '<BR/>';
                    // }
                }
                value = Number(value);
                if (param) {
                    if (param.min !== undefined) {
                        if (value < param.min) {
                            // this.formErrors[this.question.key] += '*请输入大于' + param.min + '的数字' + '<BR/>';
                            return '*请输入大于' + param.min + '的数字' + '<BR/>';
                        }
                    }
                    if (param.max !== undefined) {
                        if (value > param.max) {
                            // this.formErrors[this.question.key] += '*请输入小于' + param.max + '的数字' + '<BR/>';
                            return '*请输入小于' + param.max + '的数字' + '<BR/>';
                        }
                    }
                }
                return '';
            },
            'phone': function (question, param) {
                var value = question.value;
                var MOBILE_REGEXP = /^1[0-9]{10,10}$/;
                if (!MOBILE_REGEXP.test(value)) {
                    // this.formErrors[this.question.key] += '*请输入数字' + '<BR/>';
                    return '*请输入正确的手机号码' + '<BR/>';
                }
            },
            'customize': function (question, param) {
                return param.fn(question.parent);
            }
        };
    }
    QuestionService.prototype.beiginValidate = function (question) {
        var text = '';
        if (question.required || question.validateFn.length > 0) {
            if (this.judgeIsEmpty(question.value)) {
                text = '*必填项' + '<BR/>';
            }
            else {
                for (var _i = 0, _a = question.validateFn; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!!this.judge[key.name]) {
                        text += this.judge[key.name](question, key.param);
                    }
                }
            }
        }
        question.validateErrors = text;
    };
    QuestionService.prototype.valueValidate = function (value, question) {
        if (value !== question.value) {
            question.value = value;
            this.beiginValidate(question); //开始自定义函数验证
            this.sendMesAfterChange(question);
        }
        return question;
    };
    //判断参数是否为空
    QuestionService.prototype.judgeIsEmpty = function (data) {
        if ('[object Array]' === Object.prototype.toString.call(data)) {
            if (data.length == 0) {
                return true;
            }
        }
        if ('[object Undefined]' === Object.prototype.toString.call(data)) {
            return true;
        }
        if ('[object Null]' === Object.prototype.toString.call(data)) {
            return true;
        }
        if ('[object Object]' === Object.prototype.toString.call(data)) {
            if (Object.keys(data).length == 0) {
                return true;
            }
        }
        return false;
    };
    //判断数据源查询条件是否完整
    QuestionService.prototype.paramInspect = function (param, key) {
        var param_inspect = true;
        if (param) {
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var item = key_1[_i];
                if (this.judgeIsEmpty(param[item])) {
                    param_inspect = false;
                    break;
                }
            }
        }
        else {
            param_inspect = false;
        }
        return param_inspect;
    };
    //值改变后向相关联的组件发送消息
    QuestionService.prototype.sendMesAfterChange = function (question) {
        var subject_option = question.questionSubject;
        if (subject_option) {
            if (subject_option.subject) {
                var send_data = question.validateErrors == '' ? question.value : null;
                //添加参数
                subject_option.subject_param[question.key] = send_data;
                subject_option.subject.next(subject_option.subject_param);
            }
        }
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map