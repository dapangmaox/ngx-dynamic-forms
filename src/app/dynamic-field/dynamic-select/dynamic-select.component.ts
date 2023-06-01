import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent implements OnInit {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.formName = this.formGroupDirective.control;
  }
}
