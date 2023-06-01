import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.formName = this.formGroupDirective.control;
  }
}
