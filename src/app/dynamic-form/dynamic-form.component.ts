import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() model: any = {};

  dynamicFormGroup: FormGroup;
  fields: any[] = [];

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formControlFields: {
      [key: string]: any;
    } = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      formControlFields[field] = new FormControl(fieldProps.value);
      console.log({ ...fieldProps, fieldName: field });
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    return formControlFields;
  }
}
