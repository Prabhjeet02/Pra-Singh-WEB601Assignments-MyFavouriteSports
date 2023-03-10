import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SportsserviceService {
  getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService) { }
  
  getSports(): Observable<Content[]> {
    const sports = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return sports;
  }
  getSpecificSports(id : number): Observable<Content[]>{
    const sports = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(sports)
  }


  getClickedSportsCard(idNum:number){
    const sports = CONTENT.filter(obj => obj.id == idNum);
    this.messageservice.add("Sports Card Retrieved at id" + idNum)
    return of(sports)
  }

 
}