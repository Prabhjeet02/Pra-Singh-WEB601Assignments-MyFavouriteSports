import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pra_Singh_MyFavouriteSports';

  contentItem:Content = {
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
    type:"outdoor and indoor",
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
 

  contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];
   
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    
  }

}
