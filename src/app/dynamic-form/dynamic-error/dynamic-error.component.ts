import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss']
})
export class DynamicErrorComponent {
  @Input() formName: FormGroup;
  @Input() fieldName: string;
}
