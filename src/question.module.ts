import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {
  FormComponent,
  FormCalendarComponent,
  FormCheckboxComponent,
  AppFormInputComponent,
  FormElementComponent,
  FormRadiobuttonComponent,
  FormDropdownComponent,
  FormMultiselectComponent,
  FormImageComponent,
  FormContextmenuComponent,
  FormFileComponent
} from './component';

const NGA_COMPONENTS = [
  FormComponent,
  FormCalendarComponent,
  FormCheckboxComponent,
  AppFormInputComponent,
  FormElementComponent,
  FormRadiobuttonComponent,
  FormDropdownComponent,
  FormMultiselectComponent,
  FormImageComponent,
  FormContextmenuComponent,
  FormFileComponent
]

import {QuestionService} from "./question.service";
import {PrimengModule} from "./primeng/primeng.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
