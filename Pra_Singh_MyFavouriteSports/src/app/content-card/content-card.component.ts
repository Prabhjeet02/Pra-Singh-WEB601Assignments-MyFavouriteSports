import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  
  FavouriteSport:Content = {
    id:1,
    title:"football",
    description:"football is an outdoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0",
    type:"outdoor"
  }
  FavouriteSport2:Content = {
    id:2,
    title:"basketball",
    description:"basketball is an outdoor and indoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse1.mm.bing.net/th?id=OIP.rSRri9OwWZadFuTqS9lVUwHaEK&pid=Api&P=0",
    type:"outdoor and indoor"
  }
  FavouriteSport3:Content = {
    id:3,
    title:"cricket",
    description:"cricket is an outdoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0",
    type:"outdoor"
  }

  MyFavouriteSports = new ContentList(this.FavouriteSport);
  contentList = this.MyFavouriteSports.getitems();

  

  constructor(){
    this.MyFavouriteSports.addContent(this.FavouriteSport);
    this.MyFavouriteSports.addContent(this.FavouriteSport2);
    this.MyFavouriteSports.addContent(this.FavouriteSport3);
  }
  
  
  
    ngOnInit(): void {
      const div = document.getElementById('MyFavouriteSports');
      console.log(div);
      if(div) {
        div.innerHTML += this.MyFavouriteSports.printProperties(0);
        div.innerHTML += this.MyFavouriteSports.printProperties(1);
        div.innerHTML += this.MyFavouriteSports.printProperties(2);
      }
  
    }
  }
