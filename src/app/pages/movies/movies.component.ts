import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from './customer';
import { IMovie } from './movieInterface';
import { MovieServices } from './movieFormService';
import { Router } from '@angular/router';

interface Movie {
  imageUrl: string;
  movieName: string;
  releaseDate: string;
  description: string;
  starRating: number;
  showDetails: boolean; 
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title : string = 'The Movie Place'
  movieText: string = "Your ticket to a cinematic experience"
  imageWidth: number = 150;
  showDetails: boolean = false;

  customerForm!: FormGroup;
  customer :Customer = new Customer();
  MovieUsers: IMovie[] = [];
  edit = true;
  add = false;
  
  movies : any = [
    {
      "movieId": 1,
      "movieName": "A New Hope",
      "releaseDate": "1977-05-25",
      "description": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR...",
      "starRating": 3.2,
      "imageUrl": "assets/Images/image1.jfif"
    },
    {
      "movieId": 2,
      "movieName": "The Empire Strikes Back",
      "releaseDate": "1980-05-17",
      "description": "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters...",
      "starRating": 3.2,
      "imageUrl": "assets/Images/image2.jfif"
    },
    {
      "movieId": 3,
      "movieName": "Return of the Jedi",
      "releaseDate": "1983-05-25",
      "description": "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored...",
      "starRating": 3.2,
      "imageUrl": "assets/Images/image3.jfif"
    },
    {
      "movieId": 4,
      "movieName": "The Phantom Menace",
      "releaseDate": "1999-05-19",
      "description": "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo...",
      "starRating": 3.2,
      "imageUrl": "assets/Images/image4.jfif"
    }
  ]
  errorMessage: any;
  fb: any;
  
  toggleDetails(movie: Movie) {
    movie.showDetails = !movie.showDetails
  }
  constructor(
    private service: MovieServices,
    private router: Router,
  ) {}

  ngOnInit(): void {
     //we use the formbuilder instance and call its group method. the group method allows us to define the set of controls and nested formGroups that are associated with the root FormGroup
     this.customerForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      movie: new FormControl(),
      movieDate: new FormControl(),
    });
    this.getData();
  }
  private getData() {
    this.service.getData().subscribe({
      next: (data) => {
        this.MovieUsers = data;
        console.log(this.MovieUsers);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  resetValues() {
    this.customerForm.reset();
  }
  update(MovieUserId: number) {
    if (MovieUserId) {
      const movieUser = this.MovieUsers.find((x) => x.id === MovieUserId);
      console.log(movieUser);

      if (!movieUser) return;
      this.customerForm.setValue({
        id:movieUser.id,
        firstName: movieUser.firstName,
        lastName: movieUser.lastName,
        email: movieUser.email,
        movie: movieUser.favouriteMovie,
        movieYear: movieUser.movieYear,
      });
    } else {
      alert('Error updating item');
    }
  }
  deleteItem(MovieUserId: number): void {
    this.service.deleteItemById(MovieUserId).subscribe((response) => {
      console.log(response);
      this.getData();
      this.resetValues();
    });
  }
  getDataById(MovieUsersId: number) {
    if (MovieUsersId) {
      const formUser = this.MovieUsers.find((x) => x.id === MovieUsersId);
      console.log(formUser);

      this.service.getDataById(MovieUsersId).subscribe((response) => {
        console.log(response);
        this.getData();
        this.resetValues();
      });
    }
  
    // this.router.navigate([
    //   '/pages/jenzco-hotels',
    //     MovieUsersId,
    //   'jenzco-form-list',
    // ]);
  }
  
  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
