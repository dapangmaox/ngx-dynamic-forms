import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@ngx-dynamic-forms/core';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicCheckboxComponent } from './dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicErrorComponent } from './dynamic-form/dynamic-error/dynamic-error.component';

@NgModule({
  declarations: [AppComponent, DynamicFormComponent, DynamicFieldComponent, DynamicCheckboxComponent, DynamicRadioComponent, DynamicSelectComponent, DynamicInputComponent, DynamicErrorComponent],
  imports: [BrowserModule, ReactiveFormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
