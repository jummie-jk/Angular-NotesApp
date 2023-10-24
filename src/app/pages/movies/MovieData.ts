import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMovie } from './movieInterface';

export class BackData implements InMemoryDbService {
      createDb(): { data: IMovie[]}{
        let data: IMovie[] = [
          {
            id: 1 ,
            firstName: 'Ife',
            lastName:' Daniels',
            email: 'ifeee@example.com',
            favouriteMovie: "Star wars",
            movieYear: 1994,
          },
          {
            id: 2 ,
            firstName: 'Chisom',
            lastName:' Jummie',
            email: 'ife@example.com',
            favouriteMovie: "She must be obeyed",
            movieYear: 2003,
          },
          {
            id: 3 ,
            firstName: 'Aanu',
            lastName:' Chioma',
            email: 'ife@example.com',
            favouriteMovie: "Celebrity",
            movieYear: 2023,
          },
          {
            id: 4 ,
            firstName: 'Iyane',
            lastName:' Daniels',
            email: 'ife@example.com',
            favouriteMovie: "None",
            movieYear: 2017
          },
        ];
        return { data };
      }
    }
    