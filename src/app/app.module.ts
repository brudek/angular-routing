import { DataBaseService } from './data-base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { TemplateDrivenFormComponent } from './about/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './about/reactive-form/reactive-form.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { SecretComponent } from './secret/secret.component';
import { Level1Component } from './secret/level1/level1.component';
import { Level2Component } from './secret/level2/level2.component';
import {FocusModule} from 'angular2-focus';

const config = {
  apiKey: 'AIzaSyCCFOIkVdRVSooSopYRb7tepsylEneA3_o',
  authDomain: 'auth-1772d.firebaseapp.com',
  databaseURL: 'https://auth-1772d.firebaseio.com',
  projectId: 'auth-1772d',
  storageBucket: 'auth-1772d.appspot.com',
  messagingSenderId: '29004457155'
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    LoginComponent,
    SecretComponent,
    Level1Component,
    Level2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    PerfectScrollbarModule,
    FocusModule.forRoot()
  ],
  providers: [
    DataBaseService,
    AuthService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
