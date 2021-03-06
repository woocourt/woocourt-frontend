import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ListUserComponent } from './user/list-user/list-user.component'
import { LoginComponent } from './login/login.component'
import { AddUserComponent } from './user/add-user/add-user.component'
import { EditUserComponent } from './user/edit-user/edit-user.component'
import {routing} from './app.routing'
import {ReactiveFormsModule} from '@angular/forms'
import {ApiService} from './service/api.service'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {TokenInterceptor} from './core/interceptor'
import { ListStoryComponent } from './story/list-story/list-story.component'
import { AddStoryComponent } from './story/add-story/add-story.component'
import { EditStoryComponent } from './story/edit-story/edit-story.component'
import { EditCharacterComponent } from './character/edit-character/edit-character.component'
import { AddCriteriaComponent } from './criteria/add-criteria/add-criteria.component'
import { ListCharacterComponent } from './character/list-character/list-character.component'

import {ListCriteriaComponent} from './criteria/list-criteria/list-criteria.component'
import { EditCriteriaComponent } from './criteria/edit-criteria/edit-criteria.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListStoryComponent,
    AddStoryComponent,
    EditStoryComponent,
    EditCharacterComponent,
    AddCriteriaComponent,
    ListCharacterComponent,
    ListCriteriaComponent,
    EditCriteriaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
