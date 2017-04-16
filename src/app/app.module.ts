import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent }        from './components/app/app.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent }     from './components/projects/projects.component';
import { HomeComponent }     from './components/home/home.component';
import { NotFoundComponent }     from './components/not-found/not-found.component';
import { ProjectService }         from './services/project.service';
import { AuthorService }         from './services/author.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    HomeComponent,
    NotFoundComponent
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
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpModule,
    CarouselModule.forRoot()
  ],
  providers: [ProjectService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

