import { Component, OnInit , Inject} from '@angular/core'
import { Router } from '@angular/router'
import { CriteriaType } from '../../model/criteriaType.model'
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-list-criteria',
  templateUrl: './list-criteria.component.html',
  styleUrls: ['./list-criteria.component.css'],
})
export class ListCriteriaComponent implements OnInit {

  criteria: CriteriaType[]

  constructor(private router: Router, private apiService: ApiService) {
    this.criteria = []
   }

  ngOnInit() {
    this.apiService.getCriteriaTypes()
      .subscribe( (data: CriteriaType[]) => {
        this.criteria = data
        console.log('criteria', this.criteria)
      })

  }

  deleteCriteria(criteriaType: CriteriaType): void {
    this.apiService.deleteCriteriaType(criteriaType.id)
      .subscribe( _ => {
        this.criteria = this.criteria.filter(s => s !== criteriaType)
      })
  }

  addCriteriaType(): void {
    this.router.navigate(['add-criteria'])
  }

  editCriteriaType(criteriaType: CriteriaType): void {
    window.localStorage.removeItem('criteriaTypeId')
    window.localStorage.setItem('criteriaTypeId', criteriaType.id.toString())
    this.router.navigate(['edit-criteria'])
  }



  // goToStories(): void {
  //   this.router.navigate(['list-story'])
  // }
}
