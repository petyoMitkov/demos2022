import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  userForm: FormGroup = this.initUserForm();

  get name(): AbstractControl | null {
    return this.userForm.get('name');
  }

  initUserForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  log() {
    console.log(this.userForm.value);
  }
}

// ******** Helpers ********
// destroy$ = new Subject<void>();

// ngOnInit() {
//   this.name?.valueChanges
//     .pipe(takeUntil(this.destroy$))
//     .subscribe((controlValue) => console.log(controlValue));
// }

// ngOnDestroy() {
//   this.destroy$.next();
//   this.destroy$.complete();
// }
