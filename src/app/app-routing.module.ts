import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsV1Component } from './pages/courses/course-details-v1/course-details-v1.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogDetailsV1Component } from './pages/blog/blog-details-v1/blog-details-v1.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { CaseDetailsV1Component} from './pages/case-studies/case-details-v1/case-details-v1.component';
import { CasesComponent } from './pages/case-studies/cases/cases.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { TeamComponent } from './pages/about/team/team.component';
import { FaqComponent } from './pages/about/faq/faq.component';
import { TermsConditionsComponent } from './pages/static-pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/static-pages/privacy-policy/privacy-policy.component';
import { PartnersComponent } from './pages/static-pages/partners/partners.component';
import { ServicesComponent } from './services/services/services.component';
import { ServiceDetailsV1Component } from './services/service-details-v1/service-details-v1.component';
import { CareerDetailComponent } from './pages/career-detail/career-detail.component';
import { CareersComponent } from './pages/careers/careers.component';
import { InsightComponent } from './pages/insight/insight/insight.component';
import { InsightDetailComponent } from './pages/insight/insight-detail/insight-detail.component';


const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'home', component:HomePageComponent},
  {path: 'course-detail/:id', component:CourseDetailsV1Component},
  {path: 'courses', component:CoursesComponent},
  {path: 'blog-detail/:id', component:BlogDetailsV1Component},
  {path: 'blogs', component:BlogsComponent},
  {path: 'case-detail/:id', component:CaseDetailsV1Component},
  {path: 'cases', component:CasesComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'team', component:TeamComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'terms-conditions', component:TermsConditionsComponent},
  {path: 'privacy-policy', component:PrivacyPolicyComponent},
  {path: 'partners', component:PartnersComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'service-detail/:id', component:ServiceDetailsV1Component},
  {path:'careers', component: CareersComponent},
  {path: 'career-detail/:id',component:CareerDetailComponent},
  {path:'insight',component:InsightComponent},
  {path:'insight-detail/:id',component:InsightDetailComponent}











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
