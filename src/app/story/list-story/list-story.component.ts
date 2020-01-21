import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Story} from "../../model/story.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css']
})
export class ListStoryComponent implements OnInit {

  stories: Story[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    this.apiService.getStories()
      .subscribe( data => {
        this.stories = data;
        console.log('stories', this.stories);
      });
  }

  deleteStory(story: Story): void {
    this.apiService.deleteStory(story.id)
      .subscribe( _ => {
        this.stories = this.stories.filter(s => s !== story);
      })
  };

  editStory(story: Story): void {
    window.localStorage.removeItem("editStoryId");
    window.localStorage.setItem("editStoryId", story.id.toString());
    this.router.navigate(['edit-story']);
  };

  addStory(): void {
    this.router.navigate(['add-story']);
  };
}
