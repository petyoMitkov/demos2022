import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'template-forms',
    component: TemplateFormsComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
  },
];

@NgModule({
  declarations: [AppComponent, TemplateFormsComponent, ReactiveFormsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
