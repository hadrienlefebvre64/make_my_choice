import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ChoiceComponent} from './beans/choice/choice.component';
import {FormsModule} from '@angular/forms';
import {ResultsComponent} from './results/results.component';

//import {RouterModule, Routes} from '@angular/router';

// const appRoutes: Routes = [
//   { path : 'results', component: ResultsComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatToolbarModule
    // RouterModule.forRoot(
    //   appRoutes
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
