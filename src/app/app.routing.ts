import { RouterModule, Routes } from '@angular/router'
import {LoginComponent} from './login/login.component'
import {AddUserComponent} from './user/add-user/add-user.component'
import {AddStoryComponent} from './story/add-story/add-story.component'
import {ListUserComponent} from './user/list-user/list-user.component'
import {EditUserComponent} from './user/edit-user/edit-user.component'
import {ListStoryComponent} from './story/list-story/list-story.component'
import {EditStoryComponent} from './story/edit-story/edit-story.component'
import {ListCharacterComponent} from './character/list-character/list-character.component'
import {EditCharacterComponent} from './character/edit-character/edit-character.component'
import {AddCharacterComponent} from './character/add-character/add-character.component'

import {ListCriteriaComponent} from './criteria/list-criteria/list-criteria.component'

const routes: Routes = [
  { path: 'list-criteria', component: ListCriteriaComponent },
  { path : '', component : ListCriteriaComponent },

  // old routes examples
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-story', component: AddStoryComponent },
  { path: 'edit-story', component: EditStoryComponent },
  { path : 'list-story', component : ListStoryComponent },
  { path: 'edit-character', component: EditCharacterComponent },
  { path : 'list-character', component : ListCharacterComponent },
  { path : 'add-character', component : AddCharacterComponent },
]

export const routing = RouterModule.forRoot(routes)
