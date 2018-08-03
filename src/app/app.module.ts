import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Route (imperative)*/
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    // This is necessary to define this for it to work
    RouterModule.forRoot(
      [
        { path: 'HomepageComponent', component: HomepageComponent },
        { path: 'FirstComponentComponent', component: FirstComponentComponent },
        { path: 'SecondComponentComponent', component: SecondComponentComponent },
        { path: 'ThirdComponentComponent', component: ThirdComponentComponent },
        { path: '', component: HomepageComponent },
        { path: '**', redirectTo: '/routetwo' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }