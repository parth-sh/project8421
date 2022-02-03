import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "Application name"

  starred_count: number = 0

  nav_list_items: { route_link: string, route_name: string }[] = [
    { route_link: "/profile", route_name: "My profile" },
  ];
}
