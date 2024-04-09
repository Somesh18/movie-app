import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTitlePipe } from '../filter-title.pipe';
import { FilterYearPipe } from '../filter-year.pipe';
import { Router } from '@angular/router';
import { TimePipe } from '../time.pipe';
import { listType } from '../movieList';

@Component({
  selector: 'app-view-movie-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, FilterTitlePipe, FilterYearPipe, TimePipe],
  templateUrl: './view-movie-list.component.html',
  styleUrl: './view-movie-list.component.css'
})

export class ViewMovieListComponent implements OnInit {
  movieListArray: listType[] = [];
  searchTitle: string = '';
  searchYear: string = '';
  errors: string = '';
  constructor(private readonly http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.getMovieList();
  }
  
  getMovieList() {
    this.http
      .get<listType[]>("/movies")
      .subscribe(data => {
        this.movieListArray = data
      });
  }

  viewDetails(id: string){
    this.router.navigate(['/movies',id]);
  }

}
