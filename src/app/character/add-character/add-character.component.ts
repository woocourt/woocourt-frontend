import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {Story} from "../../model/story.model";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  stories: Story[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.apiService.getStories()
    .subscribe( data => {
      this.stories = data;
      console.log('stories', this.stories);
    });

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      story: [''],      
    });

  }

  onSubmit() {
    const payload = {
      id: null,
      name: this.addForm.value.name,
    }
    console.log('form value', payload);
    this.apiService.addCharacter(this.addForm.value.story, payload)
      .subscribe( _ => {
        this.router.navigate(['list-story']);
      });
  }

}
