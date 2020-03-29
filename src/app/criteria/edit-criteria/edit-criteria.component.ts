import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {ApiService} from '../../service/api.service'
import { CriteriaType } from 'src/app/model/criteriaType.model'

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.css'],
})
export class EditCriteriaComponent implements OnInit {

  criteriaType: CriteriaType

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup

  ngOnInit() {
    this.criteriaType = new CriteriaType()
    this.apiService.getCriteriaType(window.localStorage.getItem('criteriaTypeId'))
    .subscribe( (data: CriteriaType) => {
      this.criteriaType = data
      console.log('criteria', this.criteriaType)
    })

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      required: [false],
    })

  }

  onSubmit() {
    const payload = {
      id: this.criteriaType.id,
      name: this.addForm.value.name,
      required: this.addForm.value.required,
    }
    console.log('form value', payload)
    this.apiService.updateCriteriaType(payload)
      .subscribe( _ => {
        this.router.navigate(['edit-criteria'])
      })
  }

}
