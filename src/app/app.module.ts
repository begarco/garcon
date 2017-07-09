import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule }             from '@angular/router';
import { CarouselModule }           from 'ngx-bootstrap';
import { AccordionModule }          from 'ngx-bootstrap';

import { AppComponent }             from './components/app/app.component';
import { ProjectDetailComponent }   from './components/project-detail/project-detail.component';
import { ProjectsComponent }        from './components/projects/projects.component';
import { HomeComponent }            from './components/home/home.component';
import { HeaderComponent }          from './components/header/header.component';
import { NotFoundComponent }        from './components/not-found/not-found.component';
import { NotAllowedComponent }      from './components/not-allowed/not-allowed.component';
import { ProjectService }           from './services/project.service';
import { AuthorService }            from './services/author.service';
import {AboutComponent}             from "./components/about/about.component";
import {ContactComponent}           from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    NotFoundComponent,
    NotAllowedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'benoit',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'rejected',
        component: NotAllowedComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [ProjectService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

