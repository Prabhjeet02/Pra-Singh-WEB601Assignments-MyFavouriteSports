
import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SportsserviceService } from '../sportsservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input() content:Content[];
  @Input() sport:Content[];
  @Input('ngModel')title: string;
  name= "Prabhjeet Singh";

  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';

  /* contentItem:Content = {
    id:1,
    title:"Football",
    description:"football is an outdoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0",
    type:"outdoor",
    tags:["outdoor", "Game"]
  };
  contentItem2:Content = {
    
    id:2,
    title:"Basketball",
    description:"basketball is an outdoor and indoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse1.mm.bing.net/th?id=OIP.rSRri9OwWZadFuTqS9lVUwHaEK&pid=Api&P=0",
    type:"indoor",
    tags:["basketball", "Game"]

  };
  contentItem3:Content = {
    id:3,
    title:"Cricket",
    description:"cricket is an outdoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0",
    type:"outdoor",
    tags:["cricket", "Game"]
  };
  contentItem4:Content = {
    id: 4,
    title:"Football",
    description:"football is an outdoor game",
    creator:"Prabhjeet",
     imgURL:"https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0", 
    type:"outdoor",
    tags:["football", "Game"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Basketball",
    description:"basketball is an outdoor and indoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse1.mm.bing.net/th?id=OIP.rSRri9OwWZadFuTqS9lVUwHaEK&pid=Api&P=0",
    type:"outdoor and indoor",
    tags:["basketball", "Game"]
  }; 
  
  contentItem6:Content = {
    id: 6,
    title:"Basketball",
    description:"basketball is an indoor game and a very good game",
    creator:"Prabhjeet",
    imgURL:"https://tse1.mm.bing.net/th?id=OIP.rSRri9OwWZadFuTqS9lVUwHaEK&pid=Api&P=0",
    type:"indoor ",
    tags:["Game", "basketball"]
  };

  contentItem7:Content = {
    id: 7,
    title:"Football",
    description:"football is an outdoor game and a very good game",
    creator:"Prabhjeet Singh",
    imgURL:"https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0",
    type:"outdoor",
    tags:["Game", "football"]
  };
  
  contentItem8:Content = {
    id:8,
    title:"Cricket",
    description:"cricket is an outdoor game and a very good game",
    creator:"Prabhjeet Singh",
    imgURL:"https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0",
    type:"outdoor",
    tags:["cricket", "cricket"]
  }; */

  /* contentArray: Content[];
  */
   constructor(private sportsservice: SportsserviceService){

    this.title = '';
    this.content = [];
    this.sport = [];
    } 

   search() {
     const content = this.content.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
     console.log(this.searchTerm);
     if (content) {
       this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
       this.messageColor = 'green';
       
     } else {
       this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
       this.messageColor = 'red';
     }
   }
   ngOnInit(){

    this.sportsservice.getFavouriteSports().subscribe(content=> this.content = content);
    this.sportsservice.getSpecificSport(1).subscribe((sport: Content[]) => this.sport = sport);
  } 

  addNewContent(newContent:any){
    this.content.push(newContent);
    this.content = [...this.content];
   // console.log(`Content Added Successfully : ${newContent.Title}`)
    
   }
 
   
}
   