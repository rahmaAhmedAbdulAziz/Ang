import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    name = "Rahma Ahmed";
    jobTitle = "Web Devolpoer";
  constructor() { }

  ngOnInit(): void {
  }

}
