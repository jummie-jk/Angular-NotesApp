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
        parameter:'Dollars',
        type:'Money',
        description: 'this is the unit of measuring weight',
      },
      {
        id: 2 ,
        serialNo: 8390,
        parameter:'Chioma',
        type:'Alien',
        description: 'this is of the alien species',
      },
      {
        id: 3 ,
        serialNo: 4256,
        parameter:'Pounds',
        type:'Money',
        description: 'this amount is probably enough',
      },
      {
        id: 4 ,
        serialNo: 2543,
        parameter:"Clava la Espada",
        type:'Song',
        description: 'this is a spanish song by Shiro Sagisu',
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
        parameter:'The Rumbling',
        type:'Song',
        description: "Bewaaaaaaaaare! It's coming for youuuuu.",
      },
    ];
    return { data };
  }
}
