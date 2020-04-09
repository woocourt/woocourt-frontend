import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from '../../service/api.service'
import { CriteriaType } from 'src/app/model/criteriaType.model'
import { CriteriaValue } from 'src/app/model/criteriaValue.model'

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.css'],
})
export class EditCriteriaComponent implements OnInit {

  criteriaType: CriteriaType
  criteriaValues: CriteriaValue[]
  newValue: CriteriaValue = new CriteriaValue()

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCriteriaType(window.localStorage.getItem('criteriaTypeId'))
      .subscribe(data => {
        console.log('type', data)
        this.criteriaType = data
      })
    this.update()
  }

  addValue() {
    this.apiService.addCriteriaValue(window.localStorage.getItem('criteriaTypeId'), this.newValue)
      .subscribe(_ => {
        this.newValue = new CriteriaValue()
        this.ngOnInit()
      })
  }

  deleteValue(valueId: string) {
    this.apiService.deleteCriteriaValue(valueId)
      .subscribe(_ => {
        this.ngOnInit()
      })
  }

  updateCriteria() {
    this.apiService.updateCriteriaType(this.criteriaType)
      .subscribe(_ => {
        this.ngOnInit()
      })
  }

  update() {
    this.apiService.getCriteriaType(window.localStorage.getItem('criteriaTypeId'))
      .subscribe((data: CriteriaType) => {
        this.criteriaType = data
        console.log('criteria', this.criteriaType)
      })

    this.apiService.getCriteriaValues(window.localStorage.getItem('criteriaTypeId'))
      .subscribe((data: CriteriaValue[]) => {
        this.criteriaValues = data
        console.log('criteria values', this.criteriaValues)
      })
  }

}
