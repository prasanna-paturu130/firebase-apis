import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public restApi="https://ng-sample-f1150-default-rtdb.firebaseio.com/movies.json";

  constructor(private http:HttpClient) { }
  
  postMovies(movie:any){
    return this.http.post(this.restApi,movie);
  }

  getMovies(){
    return this.http.get(this.restApi);
  }
}
