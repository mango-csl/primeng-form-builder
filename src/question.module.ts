import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  FormComponent,
  FormCalendarComponent,
  FormCheckboxComponent,
  AppFormInputComponent,
  FormElementComponent,
  FormRadiobuttonComponent
} from './component';

const NGA_COMPONENTS = [
  FormComponent,
  FormCalendarComponent,
  FormCheckboxComponent,
  AppFormInputComponent,
  FormElementComponent,
  FormRadiobuttonComponent
]

import {QuestionService} from "./question.service";
import {PrimengModule} from "./primeng/primeng.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule
  ],
  exports: [
    ...NGA_COMPONENTS
  ],
  declarations: [
    ...NGA_COMPONENTS
  ],
  providers:[
    QuestionService
  ]
})
export class FormBuilderModule { }
