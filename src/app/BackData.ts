// import InMemoryDbService so that I can implement my class on InMemoryDbService, also to access the createDb method.
import { InMemoryDbService } from 'angular-in-memory-web-api';
// I use this interface as a type for strong typing data
import { Data } from './pages/testing-page/data-interface';

export class BackData implements InMemoryDbService {
// id is a required field in InMemoryDbService. It gets data by id.
// All changes to this data is retained in memory.
  createDb(): { data: Data[]}{
    const data: Data[] = [
      {
        id: 1 ,
        parameter:'Issue date',
        detail:'20/4/2011'
      },
      {
        id: 2 ,
        parameter:'Value date',
        detail:'12/4/2011'
      },
      {
        id: 3 ,
        parameter:'Amount',
        detail:'100'
      },
      {
        id: 4 ,
        parameter:"Index holder's name",
        detail:'Onna'
      },
      {
        id: 5 ,
        parameter:'dataFromBack',
        detail:'dataFromBack'
      },
      {
        id: 6 ,
        parameter:'dataFromBack',
        detail:'dataFromBack'
      },
      {
        id: 7 ,
        parameter:'dataFromBack',
        detail:'dataFromBack'
      },
      {
        id: 8 ,
        parameter:'dataFromBack',
        detail:'dataFromBack'
      },
    ];
    return { data };
  }
}
