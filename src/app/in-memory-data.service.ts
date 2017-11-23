import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
     {id:1,title:'Gym',description:'workout in gym for 2 hours',done:true},
  {id:2,title:'Meals',description:'have meals before leaving',done:false},
  {id:3,title:'shopping',description:'shop at macys',done:false},
  {id:4,title:'go to movie',description:'watch movie eith tom',done:false}

    ];
    return {tasks};
  }
}