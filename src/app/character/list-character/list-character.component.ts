import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Character} from "../../model/character.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {

  characters: Character[];

  constructor(private router: Router, private apiService: ApiService) {
    this.characters = [];
   }

  ngOnInit() {
    this.apiService.getCharacters()
      .subscribe( data => {
        this.characters = data;
        console.log('characters', this.characters);
      });

  }

  deleteCharacter(character: Character): void {
    this.apiService.deleteCharacter(character.id)
      .subscribe( _ => {
        this.characters = this.characters.filter(s => s !== character);
      })
  };

  editCharacter(character: Character): void {
    window.localStorage.removeItem("editCharacterId");
    window.localStorage.setItem("editCharacterId", character.id.toString());
    this.router.navigate(['edit-character']);
  };

  addCharacter(): void {
    this.router.navigate(['add-character']);
  };

  goToStories(): void {
    this.router.navigate(['list-story']);
  }
}
