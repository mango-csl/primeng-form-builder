import {Component, Input, OnInit} from '@angular/core';
import {ImageQuestion} from "./question-image";

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.css']
})
export class FormImageComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  @Input() question: ImageQuestion;

  onChooseClick(event, fileInput) {
    fileInput.value = null;
    fileInput.click();
  }

  onFileSelect(event) {
    if (!this.question.multiple) {
      this.question.files = [];
    }
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      // if (this.validate(file)) {
      if (this.isImage(file)) {
        this.question.files.push(files[i]);
        //图片解析
        var reader = new FileReader();
        reader.readAsDataURL(this.question.files[0]);
        reader.onloadend = this.onLoadend;
      } else {

      }
    }

  }

  isImage(file) {
    return /^image\//.test(file.type);
  }

  onLoadend(event: any) {
    var img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      // let saveDis = (img.height/8 == img.width/7)?true:false;
      // if(saveDis){
      //   document.getElementById("webImgAlarm").style.display = "none";
      (<HTMLImageElement> document.querySelector("#img")).src = event.target.result;
      //   (<HTMLImageElement> document.querySelector("#img")).style.display = "inline";
      // }
      // else{
      //   document.getElementById("webImgAlarm").style.display = "inline";
      //   (<HTMLImageElement> document.querySelector("#img")).style.display = "none";
      // }
    }
  }

  cancel() {
    this.question.files = [];
  }

  // upLoad() {
  //   var newFormData = new FormData();
  //   newFormData.append("loginToken", this.cookieService.get("token"));
  //   newFormData.append("coName", 'test');
  //   newFormData.append("leader", 'test');
  //   newFormData.append("phone", '12345678911');
  //   newFormData.append("iconPic", this.files[0]);
  //
  //   for (var i = 0; i < this.files.length; i++) {
  //     newFormData.append("iconPic", this.files[i], this.files[i].name);
  //   }
  //   var oReq = new XMLHttpRequest();
  //   let msg = this.msgService;
  //   let url = this.loginService.baseUrl + "/company/add";
  //   oReq.open("POST", url, true);
  //   oReq.onload = function (oEvent) {
  //     let resp = JSON.parse(oReq.responseText);
  //     if (oReq.status == 200 && resp.result == "success") {
  //       msg.showSuccess("", resp.msg);
  //     } else {
  //       msg.showError("", resp.msg);
  //     }
  //   };
  //   oReq.send(newFormData);
  // }

}
