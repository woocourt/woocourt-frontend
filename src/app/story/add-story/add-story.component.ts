import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {Genre} from "../../model/genre.model";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  genres: Genre[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.apiService.getGenres()
    .subscribe( data => {
      this.genres = data;
      console.log('genres', this.genres);
    });

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      genre: [''],      
    });

  }

  onSubmit() {
    const payload = {
      id: null,
      title: this.addForm.value.title,
      genre: {
        id: this.addForm.value.genre
      }
    }
    console.log('form value', payload);
    this.apiService.createStory(payload)
      .subscribe( _ => {
        this.router.navigate(['list-story']);
      });
  }

}
