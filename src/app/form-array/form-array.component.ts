import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FromArrayComponent {
  // It is mandatory the FormArray to be wrapped in a FormGroup
  // https://github.com/angular/angular/issues/30264

  formGroup = this.fb.group({
    members: this.fb.array([
        this.fb.control('', [Validators.required]),
    ]),
  });

  get members(): FormArray {
    return this.formGroup.get('members') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addMember() {
    this.members.push(this.fb.control('', [Validators.required]));
  }

  deleteMember(index: number) {
    this.members.removeAt(index);
  }

  log() {
    console.log(this.formGroup.value);
  }
}
