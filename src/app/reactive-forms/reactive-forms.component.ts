import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  userForm: FormGroup = this.initUserForm();

  get name() {
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
