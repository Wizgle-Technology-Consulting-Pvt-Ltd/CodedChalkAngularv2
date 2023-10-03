import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-details-v1',
  templateUrl: './blog-details-v1.component.html',
  styleUrls: ['./blog-details-v1.component.scss']
})
export class BlogDetailsV1Component implements OnInit {
  id: any;
  blogDetails: any;

  constructor(private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    ) {}
  ngOnInit() {
  this.id = this.activeRoute.snapshot.paramMap.get("id");
  this.blogDetails = this.blogService.getBlogByID(this.id);
  }
}
