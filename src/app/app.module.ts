import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CountyPipe } from './pipes/country.pipe';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, CardComponent, CardDetailsComponent, CountyPipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
