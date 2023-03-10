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
  
  getFavouriteSports(): Observable<Content[]> {
    const sports = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return sports;
  }
  getSpecificSport(id : number): Observable<Content[]>{
    const sport = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(sport)
  }


  getClickedSportCard(playerId:number){
    const Clickedsport = CONTENT.filter(obj => obj.id == playerId);
    this.messageservice.add("Sports Card Retrieved at id" + playerId)
    return of(Clickedsport)
  }

 
}