import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SearchbarService {

  private array = new BehaviorSubject<any[]>([]);

  constructor() { }

  getArray(param: string){
  }

  updateArray(newArray: any[]){
    this.array.next(newArray);
  }
}
