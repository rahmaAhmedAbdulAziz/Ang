import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  courses = [
    {
      name : "Web design",
      background: "gray" 
    },
    {
      name : "Mobile Design",
      background: "black" 
    },
    {
      name : "Logo Design",
      background: "gray" 
    },
    {
      name : "Web Application Development",
      background: "black" 
    },
    {
      name : "Mobile Application Development",
      background: "gray" 
    },
    {
      name : "PWA Development",
      background: "black" 
    },
  ]
  // courses = [
  //   "Web design",
  //   "Mobile Design",
  //   "Logo Design",
  //   "Web Application Development",
  //   "Mobile Application Development",
  //   "PWA Development"
  // ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
