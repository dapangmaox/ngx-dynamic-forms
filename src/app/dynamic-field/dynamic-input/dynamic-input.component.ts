import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements OnInit {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.formName = this.formGroupDirective.control;
  }
}
