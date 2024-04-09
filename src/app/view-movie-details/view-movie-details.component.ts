import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TimePipe } from '../time.pipe';
import { Router } from '@angular/router';
import { detailsType } from '../movieList';

@Component({
  selector: 'app-view-movie-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule, TimePipe],
  templateUrl: './view-movie-details.component.html',
  styleUrl: './view-movie-details.component.css'
})
export class ViewMovieDetailsComponent implements OnInit{
  id = '';
  movieDetails: detailsType = {
    id: '',
    title: '',
    duration: 0,
    budget: '',
    summary: '',
    poster: '',
    box_office: '',
    producers: '',
    cinematographers: ''
  };
  
  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getMovieDetails();
  }

  getMovieDetails() {
    return this.http
      .get<detailsType>("/movies/"+this.id)
      .subscribe(data => this.movieDetails = data);
  }

  goBack() {
    this.router.navigate(['/movies']);
  }
}
