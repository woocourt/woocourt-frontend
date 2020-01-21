import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {Story} from "../../model/story.model";
import {Character} from "../../model/character.model";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  stories: Story[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  
  ngOnInit() {
    let characterId = window.localStorage.getItem("editCharacterId");
    this.apiService.getStories()
    .subscribe( data => {
      this.stories = data;
      console.log('stories', this.stories);
    });


    this.apiService.getCharacterById(characterId)
    .subscribe(data => {
      this.addForm.patchValue({
        id: data.id,
        name: data.name});
    });

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      story: [''],      
    });

  }

  onSubmit() {
    const payload = {
      id: this.addForm.value.id,
      name: this.addForm.value.name,
    }

    console.log('form value', payload);
    this.apiService.addCharacter(this.addForm.value.story, payload)
      .subscribe( _ => {
        this.router.navigate(['list-character']);
      });
  }

}
