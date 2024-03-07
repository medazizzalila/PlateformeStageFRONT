import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage';
import { formatDate } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://localhost:8085/api/stage';
  


  constructor(private http: HttpClient) { }
  

  getAllStages(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  createStage(stage: Stage): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, stage);
  }

  getStageById(id: number): Observable<Stage>{
    return this.http.get<Stage>(`${this.baseUrl}/${id}`);
  }
  getStageByIdsociete(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/societe/${id}`);
  }

  updateStage(id: number, stage: Stage): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, stage);
  }

  deleteStage(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  searchStagesByTitle(title: string): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/search?query=${title}`);
  }
  postulerAuStage(idEtudiant: number, idSociete: number): Observable<Object> {
    

    return this.http.post(`${this.baseUrl}/postulerAuStage/${idEtudiant}/${idSociete}`, {});
  }
  searchByDatedebut(datedebut: Date): Observable<Stage[]> {
    const formattedDate = formatDate(datedebut, 'yyyy-MM-dd', 'en-US');

    return this.http.get<Stage[]>(`${this.baseUrl}/byDatedebut/${datedebut}`);
  }
}


