import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      const validators: any = this.addValidator(fieldProps.rules);
      formControlFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    return formControlFields;
  }

  private addValidator(rules: object) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map(rule => {
      switch (rule) {
        case 'required':
          return Validators.required;
        default:
          return null;
      }
    });

    return validators;
  }
}
