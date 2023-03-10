import { Component } from '@angular/core';
import { SportsserviceService } from './sportsservice.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  idNum!: number;
  
  constructor(private sportsservice: SportsserviceService,private messageservice: MessageService){}

     getClickedSports(idNum:number) {

      if (isNaN(this.idNum)) {
        this.messageservice.add('Please enter a valid number.');
        return;
      }
      
      const contentCardArrayLength = this.sportsservice.getcontentCardArrayLength();
      if (this.idNum < 0 || this.idNum >= contentCardArrayLength) {
        this.messageservice.add('The entered id number is outside the bounds of the ContentCard array.');
        return;
      }

       

       try {
        const ClickedCard = this.sportsservice.getClickedSportsCard(idNum);
        this.messageservice.add("Added content of Id" + idNum);
        return (ClickedCard)
        
      } catch (error) {
        this.messageservice.add('An error occurred: ');
      }
    } 
}
