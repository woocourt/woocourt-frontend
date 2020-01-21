import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {Genre} from "../../model/genre.model";
import {Character} from "../../model/character.model";

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  genres: Genre[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  characters: Character[];

  ngOnInit() {
    let storyId = window.localStorage.getItem("editStoryId");
    this.apiService.getGenres()
    .subscribe( data => {
      this.genres = data;
      console.log('genres', this.genres);
    });


    this.apiService.getStoryById(storyId)
    .subscribe(data => {
      this.addForm.patchValue({
        id: data.id,
        title: data.title});
    });

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      genre: [''],      
    });

  }

  onSubmit() {
    const payload = {
      id: this.addForm.value.id,
      title: this.addForm.value.title,
      genre: {
        id: this.addForm.value.genre
      }
    }
    console.log('form value', payload);
    this.apiService.updateStory(payload)
      .subscribe( _ => {
        this.router.navigate(['list-story']);
      });
  }

}
