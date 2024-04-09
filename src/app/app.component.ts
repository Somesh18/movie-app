import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewMovieListComponent } from './view-movie-list/view-movie-list.component';
import { ViewMovieDetailsComponent } from './view-movie-details/view-movie-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewMovieListComponent, ViewMovieDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';
} 


