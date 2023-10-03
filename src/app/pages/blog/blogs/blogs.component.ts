import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: any;

  constructor(private blogService: BlogService,
    private router: Router) {}

  ngOnInit() {
    this.blogService.getBlogList().subscribe(
      result => {
          this.blogs = result;
          console.log(this.blogs);
      }
   );
  }

  goToDetails(id: any){
    this.router.navigate(['/blog-detail/' +id])
    }
}
