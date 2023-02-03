import { style } from '@angular/animations';
import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  @Input() content: Content;
  constructor() {
    this.content = {
    id:1,
    title:"Football",
    description:"football is an outdoor game",
    creator:"Prabhjeet",
    imgURL:"https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0",
    type:"outdoor",
    tags:["outdoor", "Game"]
    };
}
ngOnInit(): void {


}

imageText() {
  console.log("Image Url: " + this.content.imgURL + " id:" + this.content.id + " Title:" + this.content.title);
}

}
