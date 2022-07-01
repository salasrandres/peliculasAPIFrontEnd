import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  x: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.x = !this.x;
    console.log(this.x);
  }

}
