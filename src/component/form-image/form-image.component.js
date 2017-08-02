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
var question_image_1 = require("./question-image");
var FormImageComponent = (function () {
    function FormImageComponent() {
    }
    FormImageComponent.prototype.ngOnInit = function () {
    };
    FormImageComponent.prototype.onChooseClick = function (event, fileInput) {
        fileInput.value = null;
        fileInput.click();
    };
    FormImageComponent.prototype.onFileSelect = function (event) {
        if (!this.question.multiple) {
            this.question.files = [];
        }
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            // if (this.validate(file)) {
            if (this.isImage(file)) {
                this.question.files.push(files[i]);
                //图片解析
                var reader = new FileReader();
                reader.readAsDataURL(this.question.files[0]);
                reader.onloadend = this.onLoadend;
            }
            else {
            }
        }
    };
    FormImageComponent.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FormImageComponent.prototype.onLoadend = function (event) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function () {
            // let saveDis = (img.height/8 == img.width/7)?true:false;
            // if(saveDis){
            //   document.getElementById("webImgAlarm").style.display = "none";
            document.querySelector("#img").src = event.target.result;
            //   (<HTMLImageElement> document.querySelector("#img")).style.display = "inline";
            // }
            // else{
            //   document.getElementById("webImgAlarm").style.display = "inline";
            //   (<HTMLImageElement> document.querySelector("#img")).style.display = "none";
            // }
        };
    };
    FormImageComponent.prototype.cancel = function () {
        this.question.files = [];
    };
    return FormImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_image_1.ImageQuestion)
], FormImageComponent.prototype, "question", void 0);
FormImageComponent = __decorate([
    core_1.Component({
        selector: 'app-form-image',
        templateUrl: './form-image.component.html',
        styleUrls: ['./form-image.component.css']
    }),
    __metadata("design:paramtypes", [])
], FormImageComponent);
exports.FormImageComponent = FormImageComponent;
//# sourceMappingURL=form-image.component.js.map