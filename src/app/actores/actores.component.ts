import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../core/service.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  actores: any;
  constructor(private service: ServiceService) {

  }

  ngOnInit(): void {
    this.service.get().subscribe(res =>  {
      this.actores = res;
      console.log(this.actores)
    })
  }

}