import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard_main.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {


  breakpoint?: number
  main_section_padding: string = "1rem"

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 5;
    this.main_section_padding = (window.innerWidth <= 400) ? "1rem" : "3rem";
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 5;
    this.main_section_padding = (window.innerWidth <= 400) ? "1rem" : "3rem";
  }

  featured_links = Array.from({ length: 10 }).map((_, i) => `https://picsum.photos/id/10${i}/200/300`);
  recommended_links = Array.from({ length: 10 }).map((_, i) => `https://picsum.photos/id/20${i}/200/300`);
}
