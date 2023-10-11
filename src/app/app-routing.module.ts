import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsV1Component } from './pages/courses/course-details-v1/course-details-v1.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogDetailsV1Component } from './pages/blog/blog-details-v1/blog-details-v1.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { CaseStudiesDetailsComponent } from './pages/case-studies/case-studies-details/case-studies-details.component';
import { CaseStudiesV1Component } from './pages/case-studies/case-studies-v1/case-studies-v1.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CareerDetailComponent } from './pages/career-detail/career-detail.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'home', component:HomePageComponent},
  {path: 'course-detail/:id', component:CourseDetailsV1Component},
  {path: 'courses', component:CoursesComponent},
  {path: 'blog-detail/:id', component:BlogDetailsV1Component},
  {path: 'blogs', component:BlogsComponent},
  {path: 'case-studies-detail/:id', component:CaseStudiesDetailsComponent},
  {path: 'case-studies-v1', component:CaseStudiesV1Component},
  {path: 'contact', component:ContactComponent},
  {path: 'careers',component:CareersComponent},
  {path: 'career-detail/:id',component:CareerDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
