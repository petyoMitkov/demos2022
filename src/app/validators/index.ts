import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenName(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value === forbiddenName;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
