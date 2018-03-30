# form-builder

## 简介 测试 test20180330
基于primeng的复杂后台表单构造组件，提供验证(可扩展规则、支持自定义函数)、关联项选值、弹窗选值

## 安装

```
npm install primeng-form-builder
```

推荐使用angular cli---

package.json配置
```
"dependencies": {
    ...
    "primeng-form-builder": "^1.1.0"
    ...
}

```
angular-cli.json---引入primeng样式


```
"styles": [
    "../node_modules/primeng/resources/primeng.min.css",
    "../node_modules/primeng/resources/themes/omega/theme.css",
    "../node_modules/font-awesome/css/font-awesome.min.css",
],
```


## 使用

- 在module导入`FormBuilderModule`

```
import {FormBuilderModule} from "primeng-form-builder";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 准备表单内容

```
  questions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'name',
      label: '巡检任务名',
      required: true
    }),
    new CalendarQuestion({
      key: 'startTime',
      label: '巡检开始时间',
      required: true
    }),
    new TextboxQuestion({
      key: 'cycleDays',
      label: '巡检周期(天)',
      required: true,
      validateFn: [{
        name: 'numberRange'
      }]
    }),
    new RadiobuttonQuestion({
      key: 'cycle',
      label: '定期巡检',
      items: [
        {label: '是', value: true},
        {label: '否', value: false},
      ],
      required: true
    })
  ];

  submit(data) {
    console.dir(data);
  }
```

- 在模板页面使用

```
<app-form [questions]="questions" (submitData)="submit($event)"></app-form>
```