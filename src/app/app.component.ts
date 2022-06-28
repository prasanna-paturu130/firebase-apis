import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firebase-apis';
  moviesForm!:FormGroup;
  movies:Array<any>=[];
  id=1;
  displayedColumns: string[] = ['id', 'movieName', 'movieHero'];

  ngOnInit(){
    this.getMovies();
  }

  saveMovie(){
    let movie = this.moviesForm.value;
    movie.id = this.id++;
    this.moviesService.postMovies(movie).subscribe((result:any) => {
      console.log("Successfully saved..",result);
      this.getMovies();
    });
  }

  getMovies(){
    this.moviesService.getMovies().subscribe((result:any)=>{
     this.movies=Object.values(result);
     this.moviesForm.reset(); 
    });

  }
  
  constructor(private fb:FormBuilder, private moviesService: MoviesService){ 
    this.moviesForm=this.fb.group({
        movieName:[''],
        movieHero:['']
    });
  }
 
}
