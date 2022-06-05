import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true },
  ],
})
export class ForbiddenNameDirective {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const forbidden = control.value === this.forbiddenName;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  }
}
