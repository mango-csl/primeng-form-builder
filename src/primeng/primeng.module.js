"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// PrimeNg
var primeng_1 = require("primeng/primeng");
var NGA_ModuleS = [
    primeng_1.FileUploadModule,
    primeng_1.MultiSelectModule,
    primeng_1.MenuModule,
    primeng_1.SpinnerModule,
    primeng_1.RadioButtonModule,
    primeng_1.InputTextareaModule,
    primeng_1.TreeModule,
    primeng_1.SelectButtonModule,
    primeng_1.InputTextModule,
    primeng_1.CheckboxModule,
    primeng_1.GrowlModule,
    primeng_1.CarouselModule,
    primeng_1.DataTableModule,
    primeng_1.TreeTableModule,
    primeng_1.SharedModule,
    primeng_1.BreadcrumbModule,
    primeng_1.CalendarModule,
    primeng_1.ButtonModule,
    primeng_1.DialogModule,
    primeng_1.PasswordModule,
    primeng_1.PanelModule,
    primeng_1.TabMenuModule,
    primeng_1.ContextMenuModule,
    primeng_1.TabViewModule,
    primeng_1.DropdownModule,
    primeng_1.PaginatorModule,
    primeng_1.ConfirmDialogModule
];
var PrimengModule = (function () {
    function PrimengModule() {
    }
    return PrimengModule;
}());
PrimengModule = __decorate([
    core_1.NgModule({
        imports: NGA_ModuleS.slice(),
        declarations: [],
        exports: NGA_ModuleS.slice()
    })
], PrimengModule);
exports.PrimengModule = PrimengModule;
//# sourceMappingURL=primeng.module.js.map