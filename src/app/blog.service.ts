import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { blogData } from './services/blog-data';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogList(){
    return of(blogData);
  }

  getBlogByID(id: any) {
      return blogData.find(x => x.id === id);
  }
}
