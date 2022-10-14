// import InMemoryDbService so that I can implement my class on InMemoryDbService, also to access the createDb method.
import { InMemoryDbService } from 'angular-in-memory-web-api';
// I use this interface as a type for strong typing data
import { IData } from './pages/testing-page/data-interface';

export class BackData implements InMemoryDbService {
// id is a required field in InMemoryDbService. It gets data by id.
// All changes to this data is retained in memory.
  createDb(): { data: IData[]}{
    const data: IData[] = [
      {
        id: 1 ,
        serialNo: 2779,
        parameter:'Issue date',
        type:'20/4/2011',
        description: 'this is the issuing date description',
      },
      {
        id: 2 ,
        serialNo: 8390,
        parameter:'Value date',
        type:'12/4/2011',
        description: 'this is the value date write up',
      },
      {
        id: 3 ,
        serialNo: 4256,
        parameter:'Amount',
        type:'100',
        description: 'this amount is probably enough',
      },
      {
        id: 4 ,
        serialNo: 2543,
        parameter:"Index holder's name",
        type:'Onna',
        description: 'here the name of the index holder is',
      },
      {
        id: 5 ,
        serialNo: 4276,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'uhn',
      },
      {
        id: 6 ,
        serialNo: 3689,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'ahn',
      },
      {
        id: 7 ,
        serialNo: 9001,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'ohn',
      },
      {
        id: 8 ,
        serialNo: 8881,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'uhn',
      },
    ];
    return { data };
  }
}
