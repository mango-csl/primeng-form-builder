"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var component_1 = require("./component");
var NGA_COMPONENTS = [
    component_1.FormComponent,
    component_1.FormCalendarComponent,
    component_1.FormCheckboxComponent,
    component_1.AppFormInputComponent,
    component_1.FormElementComponent,
    component_1.FormRadiobuttonComponent
];
var question_service_1 = require("./question.service");
var primeng_module_1 = require("./primeng/primeng.module");
var FormBuilderModule = (function () {
    function FormBuilderModule() {
    }
    return FormBuilderModule;
}());
FormBuilderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            primeng_module_1.PrimengModule
        ],
        exports: NGA_COMPONENTS.slice(),
        declarations: NGA_COMPONENTS.slice(),
        providers: [
            question_service_1.QuestionService
        ]
    })
], FormBuilderModule);
exports.FormBuilderModule = FormBuilderModule;
//# sourceMappingURL=question.module.js.map