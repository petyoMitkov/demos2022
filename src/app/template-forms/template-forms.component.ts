import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss'],
})
export class TemplateFormsComponent {
  user = { name: '', age: '' };

  log() {
    console.log(this.user);
  }
}
