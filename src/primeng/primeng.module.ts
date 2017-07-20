import {NgModule}            from '@angular/core';

// PrimeNg
import {
  FileUploadModule,
  MultiSelectModule,
  MenuModule,
  SpinnerModule,
  RadioButtonModule,
  InputTextareaModule,
  TreeModule,
  SelectButtonModule,
  InputTextModule,
  CheckboxModule,
  GrowlModule,
  CarouselModule,
  DataTableModule,
  TreeTableModule,
  SharedModule,
  BreadcrumbModule,
  CalendarModule,
  ButtonModule,
  DialogModule,
  PasswordModule,
  PanelModule,
  TabMenuModule,
  ContextMenuModule,
  TabViewModule,
  DropdownModule,
  PaginatorModule,
  ConfirmDialogModule
} from 'primeng/primeng';

const NGA_ModuleS = [
  FileUploadModule,
  MultiSelectModule,
  MenuModule,
  SpinnerModule,
  RadioButtonModule,
  InputTextareaModule,
  TreeModule,
  SelectButtonModule,
  InputTextModule,
  CheckboxModule,
  GrowlModule,
  CarouselModule,
  DataTableModule,
  TreeTableModule,
  SharedModule,
  BreadcrumbModule,
  CalendarModule,
  ButtonModule,
  DialogModule,
  PasswordModule,
  PanelModule,
  TabMenuModule,
  ContextMenuModule,
  TabViewModule,
  DropdownModule,
  PaginatorModule,
  ConfirmDialogModule
];

@NgModule({
  imports: [
    ...NGA_ModuleS
  ],
  declarations: [

  ],
  exports: [
    ...NGA_ModuleS
  ]
})
export class PrimengModule {
}
