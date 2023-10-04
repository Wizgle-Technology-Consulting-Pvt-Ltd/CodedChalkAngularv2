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
import { CaseDetailsV1Component } from './pages/case-studies/case-details-v1/case-details-v1.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResponseV1Component } from './pages/responses/response-v1/response-v1.component';
import { CasesComponent } from './pages/case-studies/cases/cases.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { TeamComponent } from './pages/about/team/team.component';
import { CareersComponent } from './pages/about/careers/careers.component';
import { FaqComponent } from './pages/about/faq/faq.component';
import { TermsConditionsComponent } from './pages/static-pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/static-pages/privacy-policy/privacy-policy.component';
import { PartnersComponent } from './pages/static-pages/partners/partners.component';
import { ServicesComponent } from './services/services/services.component';
import { ServiceDetailsV1Component } from './services/service-details-v1/service-details-v1.component';


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
    ContactComponent,
    ResponseV1Component,
    CasesComponent,
    CaseDetailsV1Component,
    AboutUsComponent,
    TeamComponent,
    CareersComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    PartnersComponent,
    ServicesComponent,
    ServiceDetailsV1Component
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
