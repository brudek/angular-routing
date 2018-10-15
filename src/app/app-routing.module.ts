import { AuthGuardService } from './auth/auth-guard.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { TemplateDrivenFormComponent } from './about/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './about/reactive-form/reactive-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SecretComponent } from './secret/secret.component';
import { Level1Component } from './secret/level1/level1.component';
import { Level2Component } from './secret/level2/level2.component';

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: ':id',
        component: CourseDetailComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'template-driven',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      }
    ]
  },
  {
    path: 'secret',
    component: SecretComponent,
    // canActivate: [ AuthGuardService ],
    canActivateChild: [ AuthGuardService ],
    children: [
      {
        path: 'level1',
        component: Level1Component
      },
      {
        path: 'level2',
        component: Level2Component
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
