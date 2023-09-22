import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsV1Component } from './pages/courses/course-details-v1/course-details-v1.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogDetailsV1Component } from './pages/blog/blog-details-v1/blog-details-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsV1Component,
    HomePageComponent,
    BlogsComponent,
    BlogDetailsV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
