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
var question_dropdown_1 = require("./question-dropdown");
var question_service_1 = require("../../question.service");
var FormDropdownComponent = (function () {
    function FormDropdownComponent(qS) {
        this.qS = qS;
    }
    Object.defineProperty(FormDropdownComponent.prototype, "value", {
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
    FormDropdownComponent.prototype.refresh = function () {
        var _this = this;
        if (this.question.questionLoader) {
            var loader_option_1 = this.question.questionLoader;
            if (this.question.questionSubject) {
                loader_option_1.param = this.question.questionSubject.subject_param; // 当存在消息监听时,查询参数会实时改变
            }
            loader_option_1.loader[loader_option_1.loaderFn](loader_option_1.param).then(function (items) {
                _this.items = _this.createItems(loader_option_1);
                items.forEach(function (item) {
                    var can_push = true;
                    if (loader_option_1.unWanted.length > 0) {
                        for (var _i = 0, _a = loader_option_1.unWanted; _i < _a.length; _i++) {
                            var key = _a[_i];
                            if (item[loader_option_1.valueField] == key) {
                                can_push = true;
                                break;
                            }
                        }
                    }
                    if (can_push) {
                        _this.items.push({ label: item[loader_option_1.displayField], value: item[loader_option_1.valueField] });
                    }
                });
                _this.onDataload(_this.items);
            });
        }
        else if (this.question.questionEnummap) {
            var enummap_option_1 = this.question.questionEnummap;
            enummap_option_1.loader[enummap_option_1.loaderFn](enummap_option_1.enumType).then(function (ems) {
                _this.items = _this.createItems(enummap_option_1);
                ems.forEach(function (em) {
                    var can_push = true;
                    if (enummap_option_1.unWanted.length > 0) {
                        for (var _i = 0, _a = enummap_option_1.unWanted; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (em.value == item) {
                                can_push = false;
                                break;
                            }
                        }
                    }
                    if (can_push) {
                        _this.items.push({ label: em.name, value: em.value });
                    }
                });
                _this.onDataload(_this.items);
            });
        }
        else if (this.question.items) {
            this.onDataload(this.question.items);
            this.items = this.question.items;
        }
    };
    FormDropdownComponent.prototype.onDataload = function (items) {
        if (!this.question.questionSubject) {
            if (!this.question.questionSubject.subject) {
                if (items && items.length > 0) {
                    if (!this.question.value) {
                        this.question.value = items[0].value;
                    }
                }
            }
        }
    };
    FormDropdownComponent.prototype.createItems = function (option) {
        var items = [];
        if (option.allowEmpty) {
            this.question.required = false;
            items.push({ label: option.emptyText, value: null });
        }
        return items;
    };
    FormDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.question.questionSubject) {
            var subject_option_1 = this.question.questionSubject;
            //检查数据源查询条件是否完整
            if (this.qS.paramInspect(subject_option_1.subject_param, subject_option_1.observer_key)) {
                //编辑状态下 直接传入param，查询出items
                this.refresh();
            }
            else {
                this.question.readonly = true;
            }
            this.subscribe = subject_option_1.observer.subscribe(function (msg) {
                _this.question.value = null;
                _this.qS.sendMesAfterChange(_this.question);
                subject_option_1.subject_param = msg;
                //当传递的参数不完整时
                if (_this.qS.paramInspect(subject_option_1.subject_param, subject_option_1.observer_key)) {
                    _this.refresh();
                    _this.question.readonly = false;
                }
                else {
                    _this.question.readonly = true;
                    _this.items = null;
                }
            });
        }
        else {
            this.refresh();
        }
    };
    FormDropdownComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    return FormDropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_dropdown_1.DropdownQuestion)
], FormDropdownComponent.prototype, "question", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormDropdownComponent.prototype, "value", null);
FormDropdownComponent = __decorate([
    core_1.Component({
        selector: 'app-form-dropdown',
        templateUrl: './form-dropdown.component.html',
        styleUrls: ['./form-dropdown.component.css']
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], FormDropdownComponent);
exports.FormDropdownComponent = FormDropdownComponent;
//# sourceMappingURL=form-dropdown.component.js.map