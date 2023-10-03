import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsV1Component } from './pages/courses/course-details-v1/course-details-v1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogDetailsV1Component } from './pages/blog/blog-details-v1/blog-details-v1.component';
import { CaseStudiesDetailsComponent } from './pages/case-studies/case-studies-details/case-studies-details.component';
import { CaseStudiesV1Component } from './pages/case-studies/case-studies-v1/case-studies-v1.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResponseV1Component } from './pages/responses/response-v1/response-v1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsV1Component,
    HomePageComponent,
    BlogsComponent,
    BlogDetailsV1Component,
    CaseStudiesDetailsComponent,
    CaseStudiesV1Component,
    ContactComponent,
    ResponseV1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
