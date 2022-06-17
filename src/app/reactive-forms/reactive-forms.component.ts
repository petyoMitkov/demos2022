import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { forbiddenName } from './validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {
  userForm: FormGroup = this.initUserFormWithFormBuilder();
  destroy$ = new Subject<void>();

  get name(): AbstractControl | null {
    return this.userForm.get('name');
  }

  get age(): AbstractControl | null {
    return this.userForm.get('age');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.name?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((controlValue) => console.log(`Name value: ${controlValue}`));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initUserForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenName('Ivan'),
      ]),
      age: new FormControl('', [Validators.min(18), Validators.max(100)]),
    });
  }

  initUserFormWithFormBuilder(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), forbiddenName('Ivan')]],
      age: ['', [Validators.min(18), Validators.max(100)]],
      address: this.fb.group({
        city: [''],
        street: [''],
      }),
    });
  }

  log() {
    console.log(this.userForm.value);
  }
}
