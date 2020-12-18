import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id:string;
  @Input() name:string;
  @Input() daysLeft:string;
  @Input() type:string;
  @Input() price:number;
  @Input() image:string;

  constructor() { }

  ngOnInit() {
    if (this.image == undefined) { // default picture if no image is given
      this.image = '../../../assets/images/keyboard.png';
    }
  }

  checkDaysLeft() {
    return this.daysLeft === "NaN";
  }

}
