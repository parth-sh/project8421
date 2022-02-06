import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard_main.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  mobile_view: boolean
  recommended_items: Item[]
  featured_items: Item[]

  constructor(private itemService: ItemService) {
    this.mobile_view = false
    this.recommended_items = []
    this.featured_items = []
  }

  ngOnInit(): void {
    this.mobile_view = (window.innerWidth <= 400) ? true : false;
    this.itemService.getFeaturedItems().subscribe(
      items => this.featured_items = items
    );
    this.itemService.getRecommendedItems().subscribe(
      items => this.recommended_items = items
    );
  }

  onResize(event: any) {
    this.mobile_view = (window.innerWidth <= 400) ? true : false;
  }
}
