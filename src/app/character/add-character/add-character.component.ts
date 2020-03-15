import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {ApiService} from '../../service/api.service'
import {Story} from '../../model/story.model'

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup

  ngOnInit() {


    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      required: [false],
    })

  }

  onSubmit() {
    const payload = {
      id: null,
      name: this.addForm.value.name,
      required: this.addForm.value.required,
    }
    console.log('form value', payload)
    this.apiService.addCriteriaType(payload)
      .subscribe( _ => {
        this.router.navigate(['list-criteria'])
      })
  }

}
