import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  URL : string = environment.dataApiUrl


  askQuestion(question: any){
    let url = this.URL+'as'
    return this.http.post<any>(url,question);
  }
  downloadCSV(){
    let url = this.URL+'download_csv'
    return this.http.get(url,{ responseType: 'blob' });
  }
}
