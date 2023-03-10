import { Component } from '@angular/core';
import { SportsserviceService } from './sportsservice.service';
import { MessageService } from './message.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  playerId!: number;
  
  constructor(private sportsservice: SportsserviceService,private messageservice: MessageService){}

     getClickedSport(playerId:number) {

      if (isNaN(this.playerId)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.sportsservice.getcontentCardArrayLength();
      if (this.playerId < 0 || this.playerId >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

       

      try {
        const ClickedCard = this.sportsservice.getClickedSportCard(playerId);
        this.messageservice.add("Content card Retrieved"+ClickedCard);
        return;
        
      } catch (error) {
        this.messageservice.add('An error occurred: ');
      }
    } 
}
