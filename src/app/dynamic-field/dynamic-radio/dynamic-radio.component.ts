import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
  styleUrls: ['./dynamic-radio.component.scss']
})
export class DynamicRadioComponent implements OnInit {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.formName = this.formGroupDirective.control;
  }
}
