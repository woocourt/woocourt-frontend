import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {User} from '../model/user.model'
import {Story} from '../model/story.model'
import {Character} from '../model/character.model'
import {Observable} from 'rxjs/index'
import {ApiResponse} from '../model/api.response'
import { CriteriaType } from '../model/criteriaType.model'
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiEndPoint // 'https://localhost:44305/api'

  getCriteriaTypes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/criteria`)
  }

  deleteCriteriaType(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/criteria/${id}`)
  }

  ///////////////////////// old example methods

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload)
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl)
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id)
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user)
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user)
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id)
  }

  getStories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Stories`)
  }

  getStoryCharacters(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Characters/Stories/${id}`)
  }

  deleteStory(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/Stories/${id}`)
  }

  createStory(story: Story): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/Stories`, {Genre: story.genre, Title: story.title})
  }

  getStoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Stories/${id}`)
  }

  updateStory(story: Story): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/Stories`, story)
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Genres`)
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Characters`)
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Characters/${id}`)
  }

  deleteCharacter(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/Characters/${id}`)
  }

  addCharacter(storyId: string, character: Character): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/Stories/${storyId}/Characters`, character)
  }

}
