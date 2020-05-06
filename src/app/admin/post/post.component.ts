import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Post';

  allpost: any;

  constructor(private postservice: PostService) { }

  ngOnInit() {
  
   
    this.postservice.getposts().subscribe((data) => {
      this.allpost = data
    })
  }
}
