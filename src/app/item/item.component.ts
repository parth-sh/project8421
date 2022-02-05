import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  image_src = "../../assets/apartments.png"
  // image_src = ""

  constructor() { }

  ngOnInit(): void {
  }

}
