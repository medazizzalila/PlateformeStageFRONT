import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doc } from '../models/doc';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private baseUrl = 'http://localhost:8085/api/doc';


  constructor(private http: HttpClient) { }

  getAllDocs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  createDoc(doc: Doc): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, doc);
  }

  getDocById(id: number): Observable<Doc>{
    return this.http.get<Doc>(`${this.baseUrl}/${id}`);
  }

  updateDoc(id: number, doc: Doc): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, doc);
  }

  deleteDoce(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
  // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.baseUrl}/uploadjournal`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.baseUrl}/downloadjournal/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
  getDocByIdetud(id: number): Observable<Doc>{
    return this.http.get<Doc>(`${this.baseUrl}/byidetud/${id}`);
  }
 
}
