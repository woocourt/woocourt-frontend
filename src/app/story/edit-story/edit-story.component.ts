import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Story} from "../../model/story.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  story: Story;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    const storyId = window.localStorage.getItem("editStoryId");
    if(!storyId) {
      alert("Invalid action.")
      this.router.navigate(['list-story']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      genre: ['', Validators.required],
    });
    this.apiService.getStoryById(storyId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateStory(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-story']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
